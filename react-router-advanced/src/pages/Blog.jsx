import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching blog posts
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate mock blog posts
        const mockPosts = Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Blog Post ${i + 1}`,
          excerpt: `This is an excerpt for blog post ${i + 1}. It contains some preview text to give readers an idea of what the post is about.`,
          date: new Date(2024, 0, i + 1).toLocaleDateString(),
          author: `Author ${Math.floor(i / 3) + 1}`
        }));
        
        setPosts(mockPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="page-container loading">
        <div className="loader"></div>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Blog</h1>
      <p className="page-description">
        Click on any post to see dynamic routing in action. Each post has a unique URL based on its ID.
      </p>

      <div className="blog-posts">
        {posts.map(post => (
          <article key={post.id} className="blog-post-card">
            <h2>
              <Link to={`/blog/${post.id}`} className="post-link">
                {post.title}
              </Link>
            </h2>
            <div className="post-meta">
              <span>📅 {post.date}</span>
              <span>✍️ {post.author}</span>
            </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </article>
        ))}
      </div>

      <div className="dynamic-routing-note">
        <h3>🔗 Dynamic Routing Demo</h3>
        <p>
          Each blog post uses a dynamic route pattern: <code>/blog/:postId</code>
        </p>
        <p>
          Example: <Link to="/blog/3">/blog/3</Link>, <Link to="/blog/7">/blog/7</Link>
        </p>
      </div>
    </div>
  );
};

export default Blog;
