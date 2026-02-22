import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <h1>About This Demo</h1>
      
      <div className="about-section">
        <h2>React Router Advanced Features</h2>
        <p>
          This project demonstrates advanced routing concepts in React using React Router v6.
          It's designed to show how to implement complex routing scenarios in real-world applications.
        </p>
      </div>

      <div className="about-section">
        <h3>Technologies Used</h3>
        <ul>
          <li>React 18</li>
          <li>React Router v6</li>
          <li>Context API for Auth</li>
          <li>Vite for build tooling</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Routing Features Implemented</h3>
        <ul>
          <li><strong>BrowserRouter:</strong> For clean URLs</li>
          <li><strong>Routes & Route:</strong> Declarative routing</li>
          <li><strong>Nested Routes:</strong> Using Outlet component</li>
          <li><strong>Dynamic Segments:</strong> :postId parameter</li>
          <li><strong>Protected Routes:</strong> Auth wrapper component</li>
          <li><strong>useNavigate:</strong> Programmatic navigation</li>
          <li><strong>useParams:</strong> Access route parameters</li>
          <li><strong>useLocation:</strong> Track current location</li>
          <li><strong>NavLink:</strong> Active link styling</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
