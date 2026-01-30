import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

/**
 * Fetch user data from GitHub API (Basic search)
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} User data
 */
export const fetchUserData = async (username) => {
  try {
    const config = getApiConfig();
    const response = await axios.get(
      `${API_BASE_URL}/users/${username}`,
      config
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Looks like we cant find the user');
    }
    throw handleApiError(error);
  }
};

/**
 * Advanced search for GitHub users with multiple criteria
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.query - Main search query (username/name)
 * @param {string} searchParams.location - User location
 * @param {number} searchParams.minRepos - Minimum number of repositories
 * @param {number} searchParams.page - Page number for pagination
 * @param {number} searchParams.perPage - Results per page
 * @returns {Promise<Object>} Search results with user list and pagination info
 */
export const searchUsersAdvanced = async ({
  query = '',
  location = '',
  minRepos = 0,
  page = 1,
  perPage = 10
} = {}) => {
  try {
    const config = getApiConfig();
    
    // Build advanced search query according to GitHub API format
    let searchQuery = query || '';
    
    // Add location filter
    if (location) {
      searchQuery += ` location:${location}`;
    }
    
    // Add repository count filter
    if (minRepos > 0) {
      searchQuery += ` repos:>${minRepos}`;
    }
    
    // If no query is provided, search for all users
    if (!searchQuery.trim()) {
      searchQuery = 'type:user';
    }
    
    // Construct the exact API endpoint as specified in the task
    const apiUrl = `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`;
    
    const response = await axios.get(
      apiUrl,
      {
        ...config,
        params: {
          sort: 'followers',
          order: 'desc',
          page,
          per_page: perPage
        }
      }
    );
    
    // Get detailed user data for each user in the results
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        try {
          const userDetails = await axios.get(
            `${API_BASE_URL}/users/${user.login}`,
            config
          );
          return {
            ...user,
            ...userDetails.data
          };
        } catch {
          return user; // Return basic user data if detailed fetch fails
        }
      })
    );
    
    return {
      total_count: response.data.total_count,
      incomplete_results: response.data.incomplete_results,
      items: usersWithDetails,
      page,
      per_page: perPage,
      hasMore: page * perPage < response.data.total_count
    };
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Alternative function using only the search endpoint without additional user details
 * This uses the exact format from the task description
 */
export const searchUsersBasic = async (searchTerm) => {
  try {
    const config = getApiConfig();
    
    // Construct the exact API endpoint as specified in the task
    const apiUrl = `https://api.github.com/search/users?q=${encodeURIComponent(searchTerm)}`;
    
    const response = await axios.get(
      apiUrl,
      {
        ...config,
        params: {
          sort: 'followers',
          order: 'desc',
          per_page: 30
        }
      }
    );
    
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Search users with simple query (for demonstration of the exact endpoint format)
 * This is the exact implementation as mentioned in the task
 */
export const searchUsersWithExactEndpoint = async (query) => {
  try {
    const config = getApiConfig();
    
    // The exact endpoint format from the task description
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
      config
    );
    
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Get API configuration with headers
 * @returns {Object} Axios configuration
 */
const getApiConfig = () => {
  const config = {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  };

  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (apiKey && apiKey !== 'your_api_key_here') {
    config.headers['Authorization'] = `token ${apiKey}`;
  }
  
  return config;
};

/**
 * Handle API errors
 * @param {Error} error - The error object
 * @returns {Error} Formatted error
 */
const handleApiError = (error) => {
  if (error.response?.status === 403) {
    return new Error('GitHub API rate limit exceeded. Please try again later.');
  } else if (error.response?.status === 422) {
    return new Error('Invalid search parameters. Please check your input.');
  } else if (error.response?.status === 503) {
    return new Error('GitHub API is currently unavailable. Please try again later.');
  }
  return new Error(error.message || 'Failed to fetch data from GitHub API');
};
