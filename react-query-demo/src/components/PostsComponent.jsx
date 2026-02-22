import React, { useState } from 'react';
import { useQuery } from 'react-query';
import './PostsComponent.css';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [refetchCount, setRefetchCount] = useState(0);

  // Using React Query's useQuery hook
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt
  } = useQuery('posts', fetchPosts, {
    // Cache configuration
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Data is cached for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    onSuccess: (data) => {
      console.log('Posts fetched successfully:', data.length, 'posts');
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

  if (isLoading) {
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
              Posts: {posts?.length || 0}
            </span>
            <span className="badge">
              Last Updated: {lastUpdate}
            </span>
            {isFetching && <span className="badge fetching">Refreshing...</span>}
          </div>
          <button 
            onClick={handleRefetch} 
            disabled={isFetching}
            className="refetch-btn"
          >
            {isFetching ? 'Refreshing...' : 'Refresh Posts'}
          </button>
        </div>
      </div>

      <div className="posts-content">
        <div className="posts-list">
          <h3>Posts List ({refetchCount > 0 ? `Refetched ${refetchCount} time(s)` : 'Initial Load'})</h3>
          {posts?.map(post => (
            <div 
              key={post.id} 
              className={`post-item ${selectedPost?.id === post.id ? 'selected' : ''}`}
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
        <h4>🧪 React Query Cache Demo</h4>
        <p>Navigate away and come back to this component - the data will load from cache instantly!</p>
        <p>Click "Refresh Posts" to fetch fresh data from the API.</p>
        <p className="cache-note">
          <strong>Cache Status:</strong> Data is cached for 10 minutes and considered fresh for 5 minutes.
          Check the Network tab in DevTools to see reduced API calls.
        </p>
      </div>
    </div>
  );
};

export default PostsComponent;
