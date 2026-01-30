import PropTypes from 'prop-types';

function UserList({ users, loadingMore, onLoadMore, hasMore }) {
  if (!users || users.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No users found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
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
      
      {hasMore && (
        <div className="text-center pt-6">
          <button
            onClick={onLoadMore}
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
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loadingMore: PropTypes.bool,
  onLoadMore: PropTypes.func,
  hasMore: PropTypes.bool
};

UserList.defaultProps = {
  loadingMore: false,
  hasMore: false
};

export default UserList;
