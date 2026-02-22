import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import '../Pages.css';

const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div className="profile-details">
      <h2>Profile Details</h2>
      
      <div className="details-card">
        <div className="detail-item">
          <label>Full Name:</label>
          <span>{user?.name}</span>
        </div>
        
        <div className="detail-item">
          <label>Email Address:</label>
          <span>{user?.email}</span>
        </div>
        
        <div className="detail-item">
          <label>Member Since:</label>
          <span>January 2024</span>
        </div>
        
        <div className="detail-item">
          <label>Account Type:</label>
          <span>{user?.role === 'user' ? 'Standard User' : user?.role}</span>
        </div>
        
        <div className="detail-item">
          <label>Total Posts:</label>
          <span>12</span>
        </div>
        
        <div className="detail-item">
          <label>Join Date:</label>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="info-box">
        <h4>📋 About This Page</h4>
        <p>
          This is a nested route under /profile. Notice the URL: <code>/profile/details</code>
        </p>
        <p>
          Nested routes allow you to compose complex UIs where different sections
          of a page can change independently based on the URL.
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
