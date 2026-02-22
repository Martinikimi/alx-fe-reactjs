import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to React Router Advanced</h1>
      <p className="page-description">
        This demo showcases advanced routing techniques including nested routes,
        dynamic routing, and protected routes.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>🔐 Protected Routes</h3>
          <p>Profile pages require authentication. Try accessing /profile without logging in.</p>
          <Link to="/profile" className="feature-link">Try Protected Route →</Link>
        </div>

        <div className="feature-card">
          <h3>📝 Dynamic Routes</h3>
          <p>Blog posts with dynamic URLs. Each post has its own unique path.</p>
          <Link to="/blog" className="feature-link">View Blog Posts →</Link>
        </div>

        <div className="feature-card">
          <h3>🔀 Nested Routes</h3>
          <p>Profile section with nested routes for details and settings.</p>
          <Link to="/profile" className="feature-link">View Nested Routes →</Link>
        </div>
      </div>

      <div className="routing-demo">
        <h2>Current Route Features</h2>
        <ul>
          <li><strong>Nested Routes:</strong> Profile/Details and Profile/Settings</li>
          <li><strong>Dynamic Routes:</strong> /blog/:postId</li>
          <li><strong>Protected Routes:</strong> /profile/* (requires login)</li>
          <li><strong>Auth Context:</strong> Global authentication state</li>
          <li><strong>Active Links:</strong> NavLink with active states</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
