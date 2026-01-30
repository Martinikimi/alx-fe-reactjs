import { useState } from 'react';
import { fetchUserData, searchUsersAdvanced } from '../services/githubService';

function Search() {
  // Basic search state
  const [basicUsername, setBasicUsername] = useState('');
  const [basicUserData, setBasicUserData] = useState(null);
  const [basicLoading, setBasicLoading] = useState(false);
  const [basicError, setBasicError] = useState(null);
  
  // Advanced search state
  const [searchMode, setSearchMode] = useState('basic'); // 'basic' or 'advanced'
  const [advancedParams, setAdvancedParams] = useState({
    query: '',
    location: '',
    minRepos: '',
  });
  const [advancedResults, setAdvancedResults] = useState(null);
  const [advancedLoading, setAdvancedLoading] = useState(false);
  const [advancedError, setAdvancedError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  // Handle basic search
  const handleBasicSubmit = async (e) => {
    e.preventDefault();
    
    if (!basicUsername.trim()) return;
    
    setBasicLoading(true);
    setBasicError(null);
    setBasicUserData(null);
    
    try {
      const data = await fetchUserData(basicUsername);
      setBasicUserData(data);
    } catch (err) {
      setBasicError('Looks like we cant find the user');
    } finally {
      setBasicLoading(false);
    }
  };

  // Handle advanced search
  const handleAdvancedSubmit = async (e, page = 1) => {
    e?.preventDefault();
    
    if (page === 1) {
      setAdvancedLoading(true);
    } else {
      setLoadingMore(true);
    }
    
    setAdvancedError(null);
    
    try {
      const results = await searchUsersAdvanced({
        query: advancedParams.query,
        location: advancedParams.location,
        minRepos: parseInt(advancedParams.minRepos) || 0,
        page,
        perPage: 9
      });
      
      if (page === 1) {
        setAdvancedResults(results);
      } else {
        setAdvancedResults(prev => ({
          ...results,
          items: [...prev.items, ...results.items]
        }));
      }
    } catch (err) {
      setAdvancedError(err.message);
    } finally {
      setAdvancedLoading(false);
      setLoadingMore(false);
    }
  };

  // Load more results for advanced search
  const handleLoadMore = () => {
    if (advancedResults && advancedResults.hasMore) {
      handleAdvancedSubmit(null, advancedResults.page + 1);
    }
  };

  // Handle advanced search input changes
  const handleAdvancedChange = (field) => (e) => {
    setAdvancedParams(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          GitHub User Search
        </h1>
        <p className="text-gray-600">
          Search for GitHub users with basic or advanced criteria
        </p>
      </div>

      {/* Search Mode Toggle */}
      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setSearchMode('basic')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              searchMode === 'basic'
                ? 'border-b-2 border-github-blue text-github-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Basic Search
          </button>
          <button
            onClick={() => setSearchMode('advanced')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              searchMode === 'advanced'
                ? 'border-b-2 border-github-blue text-github-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Advanced Search
          </button>
        </div>
      </div>

      {/* Basic Search Form */}
      {searchMode === 'basic' && (
        <div className="space-y-6">
          <form onSubmit={handleBasicSubmit} className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Search by Username
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={basicUsername}
                onChange={(e) => setBasicUsername(e.target.value)}
                placeholder="Enter GitHub username (e.g., octocat)"
                className="input-field flex-1"
              />
              <button
                type="submit"
                disabled={basicLoading}
                className="btn-primary sm:w-auto"
              >
                {basicLoading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>

          {/* Basic Search Results */}
          <div className="space-y-4">
            {basicLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-github-blue"></div>
                <p className="mt-2 text-gray-600">Loading...</p>
              </div>
            )}

            {basicError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
                <p className="text-red-700 font-medium">{basicError}</p>
              </div>
            )}

            {basicUserData && !basicLoading && !basicError && (
              <div className="card">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <img
                    src={basicUserData.avatar_url}
                    alt={basicUserData.login}
                    className="w-24 h-24 rounded-full border-3 border-github-blue"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {basicUserData.name || basicUserData.login}
                    </h3>
                    {basicUserData.login && (
                      <p className="text-gray-600">@{basicUserData.login}</p>
                    )}
                    
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-gray-900">
                          {basicUserData.public_repos}
                        </div>
                        <div className="text-sm text-gray-600">Repositories</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-gray-900">
                          {basicUserData.followers}
                        </div>
                        <div className="text-sm text-gray-600">Followers</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-gray-900">
                          {basicUserData.following}
                        </div>
                        <div className="text-sm text-gray-600">Following</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-gray-900">
                          {basicUserData.public_gists || 0}
                        </div>
                        <div className="text-sm text-gray-600">Gists</div>
                      </div>
                    </div>
                    
                    {basicUserData.location && (
                      <div className="mt-4 flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {basicUserData.location}
                      </div>
                    )}
                    
                    {basicUserData.bio && (
                      <p className="mt-4 text-gray-700">{basicUserData.bio}</p>
                    )}
                    
                    <a
                      href={basicUserData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center px-6 py-3 text-white bg-github-green rounded-lg hover:bg-green-600 font-medium transition-colors"
                    >
                      View Full Profile on GitHub
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Advanced Search Form */}
      {searchMode === 'advanced' && (
        <div className="space-y-6">
          <form onSubmit={handleAdvancedSubmit} className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Advanced Search
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username or Name
                </label>
                <input
                  type="text"
                  value={advancedParams.query}
                  onChange={handleAdvancedChange('query')}
                  placeholder="octocat or John Doe"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={advancedParams.location}
                  onChange={handleAdvancedChange('location')}
                  placeholder="San Francisco, CA"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Repositories
                </label>
                <input
                  type="number"
                  value={advancedParams.minRepos}
                  onChange={handleAdvancedChange('minRepos')}
                  placeholder="10"
                  min="0"
                  className="input-field"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                {advancedResults && (
                  <span>Found {advancedResults.total_count} users</span>
                )}
              </div>
              <button
                type="submit"
                disabled={advancedLoading}
                className="btn-primary px-8"
              >
                {advancedLoading ? 'Searching...' : 'Search Users'}
              </button>
            </div>
          </form>

          {/* Advanced Search Results */}
          <div className="space-y-4">
            {advancedLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-github-blue"></div>
                <p className="mt-2 text-gray-600">Searching GitHub users...</p>
              </div>
            )}

            {advancedError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
                <p className="text-red-700 font-medium">{advancedError}</p>
              </div>
            )}

            {advancedResults && !advancedLoading && !advancedError && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Search Results
                  </h3>
                  <span className="text-sm text-gray-500">
                    Page {advancedResults.page} • {advancedResults.items.length} shown
                  </span>
                </div>
                
                {/* MAP FUNCTION TO DISPLAY USERS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advancedResults.items.map((user) => (
                    <div key={user.id} className="card hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <img
                          src={user.avatar_url}
                          alt={user.login}
                          className="w-16 h-16 rounded-full border-2 border-github-blue"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {user.name || user.login}
                          </h3>
                          {user.login && (
                            <p className="text-sm text-gray-500">@{user.login}</p>
                          )}
                          
                          {user.location && (
                            <div className="flex items-center mt-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {user.location}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex space-x-4">
                              <div className="text-center">
                                <div className="font-bold text-gray-900">{user.public_repos || 0}</div>
                                <div className="text-xs text-gray-500">Repos</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-gray-900">{user.followers || 0}</div>
                                <div className="text-xs text-gray-500">Followers</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-gray-900">{user.following || 0}</div>
                                <div className="text-xs text-gray-500">Following</div>
                              </div>
                            </div>
                          </div>
                          
                          <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-github-green rounded-md hover:bg-green-600 transition-colors"
                          >
                            View Profile
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      
                      {user.bio && (
                        <p className="mt-4 text-sm text-gray-600 line-clamp-2">{user.bio}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                {advancedResults.hasMore && (
                  <div className="text-center pt-6">
                    <button
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      className="btn-primary px-8 py-3"
                    >
                      {loadingMore ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Loading...
                        </>
                      ) : 'Load More'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Search Tips */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-800 mb-2">Search Tips:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Use advanced search to filter by location and repository count</li>
          <li>• Leave fields empty to search all users</li>
          <li>• Try searching for users in specific locations like "San Francisco" or "Berlin"</li>
          <li>• Filter by minimum repositories to find more active developers</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
