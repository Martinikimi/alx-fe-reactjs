import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Pages.css';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  // Simulate fetching a single post
  const getPostContent = (id) => {
    const posts = {
      1: {
        title: "Getting Started with React Router",
        content: "React Router is a powerful routing library that enables navigation between different components in a React application. It maintains the UI in sync with the URL, providing a seamless single-page application experience. In this comprehensive guide, we'll explore everything from basic setup to advanced routing patterns including nested routes, protected routes, and dynamic routing. We'll also dive into hooks like useParams, useNavigate, and useLocation that make React Router incredibly powerful for building complex applications.",
        author: "John Doe",
        date: "2024-01-01",
        readTime: "5 min"
      },
      2: {
        title: "Understanding Protected Routes",
        content: "Protected routes are an essential part of any application that requires authentication. They ensure that certain pages are only accessible to authenticated users. In React Router, we can create protected routes by using a wrapper component that checks the user's authentication status and either renders the requested component or redirects to a login page. This pattern is crucial for maintaining security in applications with user-specific content and actions. We'll implement this using React's Context API for global auth state management.",
        author: "Jane Smith",
        date: "2024-01-02",
        readTime: "7 min"
      },
      3: {
        title: "Nested Routes in React",
        content: "Nested routes allow you to compose your UI using components that match segments of the URL. This is particularly useful for creating complex layouts where certain parts of the page change while others remain constant. For example, a profile page might have tabs for details, settings, and activity, each with its own URL. React Router makes this easy with the Outlet component, which acts as a placeholder for nested route content. This pattern helps maintain clean, maintainable code organization.",
        author: "Bob Wilson",
        date: "2024-01-03",
        readTime: "6 min"
      }
    };

    return posts[id] || {
      title: `Blog Post ${postId}`,
      content: `This is the full content for blog post ${postId}. In a real application, this would be fetched from an API based on the ID from the URL. The dynamic routing capability of React Router allows us to create flexible, scalable applications where content can be served based on URL parameters.`,
      author: "Guest Author",
      date: new Date().toLocaleDateString(),
      readTime: "4 min"
    };
  };

  const post = getPostContent(postId);

  return (
    <div className="page-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back to Blog
      </button>

      <article className="blog-post-full">
        <h1>{post.title}</h1>
        
        <div className="post-full-meta">
          <span>By {post.author}</span>
          <span>📅 {post.date}</span>
          <span>⏱️ {post.readTime} read</span>
        </div>

        <div className="post-content">
          <p>{post.content}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="dynamic-route-info">
          <h3>📍 Dynamic Route Information</h3>
          <p>Current Post ID: <code>{postId}</code></p>
          <p>Route Pattern: <code>/blog/:postId</code></p>
          <p>This page demonstrates dynamic routing with URL parameters.</p>
        </div>

        <div className="post-navigation">
          <h3>Read More Posts</h3>
          <div className="nav-links">
            <Link to="/blog/1">Post 1</Link>
            <Link to="/blog/2">Post 2</Link>
            <Link to="/blog/3">Post 3</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
