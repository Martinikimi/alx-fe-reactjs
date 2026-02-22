import React, { useState } from 'react';
import { useQuery } from 'react-query';
import './PostsComponent.css';

// Function to fetch posts from JSONPlaceholder API with pagination
const fetchPosts = async ({ queryKey }) => {
  const [, page] = queryKey;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Function to fetch total posts count
const fetchTotalPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.length;
};

const PostsComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [refetchCount, setRefetchCount] = useState(0);
  const [page, setPage] = useState(1);
  const [enablePolling, setEnablePolling] = useState(false);

  // Query for total posts count
  const {
    data: totalPosts,
    isLoading: totalLoading
  } = useQuery('totalPosts', fetchTotalPosts, {
    staleTime: 10 * 60 * 1000, // 10 minutes
    cacheTime: 15 * 60 * 1000, // 15 minutes
  });

  // Using React Query's useQuery hook with pagination and keepPreviousData
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
    isPreviousData
  } = useQuery(['posts', page], fetchPosts, {
    // Cache configuration
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Data is cached for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    
    // Keep previous data while fetching new data (important for pagination)
    keepPreviousData: true,
    
    // Polling configuration (optional feature)
    refetchInterval: enablePolling ? 30000 : false, // Poll every 30 seconds if enabled
    
    // Callbacks
    onSuccess: (data) => {
      console.log('Posts fetched successfully:', data.length, 'posts on page', page);
    },
    onError: (err) => {
      console.error('Error fetching posts:', err);
    }
  });

  // Format the last update time
  const lastUpdate = new Date(dataUpdatedAt).toLocaleTimeString();

  const handleRefetch = () => {
    setRefetchCount(prev => prev + 1);
    refetch();
  };

  const handlePostClick = (post) => {
    setSelectedPost(post === selectedPost ? null : post);
  };

  const handleNextPage = () => {
    // Don't go to next page if we don't have more data
    if (totalPosts && page < Math.ceil(totalPosts / 10)) {
      setPage(old => old + 1);
    }
  };

  const handlePrevPage = () => {
    setPage(old => Math.max(old - 1, 1));
  };

  const togglePolling = () => {
    setEnablePolling(!enablePolling);
  };

  if (isLoading && page === 1) {
    return (
      <div className="posts-container loading">
        <div className="loader"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="posts-container error">
        <h3>Error Loading Posts</h3>
        <p>{error.message}</p>
        <button onClick={handleRefetch} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>JSONPlaceholder Posts</h2>
        <div className="header-controls">
          <div className="cache-info">
            <span className="badge">
              Posts: {posts?.length || 0} (Page {page})
            </span>
            <span className="badge">
              Last Updated: {lastUpdate}
            </span>
            {isFetching && <span className="badge fetching">Refreshing...</span>}
            {isPreviousData && <span className="badge previous">Showing previous data...</span>}
          </div>
          <div className="action-buttons">
            <button 
              onClick={togglePolling}
              className={`polling-btn ${enablePolling ? 'active' : ''}`}
            >
              {enablePolling ? 'Disable Polling' : 'Enable Polling (30s)'}
            </button>
            <button 
              onClick={handleRefetch} 
              disabled={isFetching}
              className="refetch-btn"
            >
              {isFetching ? 'Refreshing...' : 'Refresh Posts'}
            </button>
          </div>
        </div>
      </div>

      <div className="posts-content">
        <div className="posts-list">
          <h3>Posts List ({refetchCount > 0 ? `Refetched ${refetchCount} time(s)` : 'Initial Load'})</h3>
          
          {/* Pagination Controls */}
          <div className="pagination-controls">
            <button 
              onClick={handlePrevPage} 
              disabled={page === 1 || isFetching}
              className="pagination-btn"
            >
              Previous
            </button>
            <span className="page-info">
              Page {page} of {totalPosts ? Math.ceil(totalPosts / 10) : '...'}
            </span>
            <button 
              onClick={handleNextPage} 
              disabled={totalPosts ? page >= Math.ceil(totalPosts / 10) : true || isFetching}
              className="pagination-btn"
            >
              Next
            </button>
          </div>

          {/* Posts List */}
          {posts?.map(post => (
            <div 
              key={post.id} 
              className={`post-item ${selectedPost?.id === post.id ? 'selected' : ''} ${isPreviousData ? 'previous-data' : ''}`}
              onClick={() => handlePostClick(post)}
            >
              <h4>{post.title}</h4>
              <p>{post.body.substring(0, 100)}...</p>
              <small>Post ID: {post.id} | User ID: {post.userId}</small>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="post-detail">
            <h3>Post Details</h3>
            <div className="detail-content">
              <h4>{selectedPost.title}</h4>
              <p>{selectedPost.body}</p>
              <div className="post-meta">
                <span>Post ID: {selectedPost.id}</span>
                <span>User ID: {selectedPost.userId}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="cache-demo-info">
        <h4>🧪 React Query Advanced Features Demo</h4>
        <div className="feature-grid">
          <div className="feature-item">
            <strong>keepPreviousData: true</strong>
            <p>When changing pages, previous data is shown while fetching new data - no loading spinners!</p>
          </div>
          <div className="feature-item">
            <strong>Cache Demo</strong>
            <p>Navigate away and come back - data loads from cache instantly!</p>
          </div>
          <div className="feature-item">
            <strong>Polling</strong>
            <p>Enable polling to automatically fetch fresh data every 30 seconds.</p>
          </div>
          <div className="feature-item">
            <strong>Pagination</strong>
            <p>Data is paginated with 10 posts per page. Notice how keepPreviousData maintains UI during page changes.</p>
          </div>
        </div>
        <p className="cache-note">
          <strong>Cache Status:</strong> Data is cached for 10 minutes and considered fresh for 5 minutes.
          Check the Network tab to see reduced API calls and the "previous data" indicator during page changes.
        </p>
      </div>
    </div>
  );
};

export default PostsComponent;
