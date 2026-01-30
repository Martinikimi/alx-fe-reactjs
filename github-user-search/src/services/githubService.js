import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

/**
 * Fetch user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} User data
 */
export const fetchUserData = async (username) => {
  try {
    // You can add authentication headers if needed
    const config = {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    // Add API key if available
    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
    if (apiKey && apiKey !== 'your_api_key_here') {
      config.headers['Authorization'] = `token ${apiKey}`;
    }

    const response = await axios.get(
      `${API_BASE_URL}/users/${username}`,
      config
    );
    
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    } else if (error.response && error.response.status === 403) {
      // Rate limit exceeded
      throw new Error('GitHub API rate limit exceeded. Please try again later.');
    } else {
      throw new Error(error.message || 'Failed to fetch user data');
    }
  }
};

// Optional: You can add more API functions here later
// export const fetchUserRepos = async (username) => { ... }
// export const searchUsers = async (query) => { ... }
