import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        <p>Welcome back, {user?.name}!</p>
      </div>

      <div className="profile-navigation">
        <NavLink 
          to="/profile/details" 
          className={({ isActive }) => isActive ? 'profile-nav-link active' : 'profile-nav-link'}
        >
          Profile Details
        </NavLink>
        <NavLink 
          to="/profile/settings" 
          className={({ isActive }) => isActive ? 'profile-nav-link active' : 'profile-nav-link'}
        >
          Account Settings
        </NavLink>
      </div>

      <div className="profile-content">
        <Outlet />
      </div>

      <div className="nested-routes-info">
        <h3>🔀 Nested Routes Demo</h3>
        <p>This profile section demonstrates nested routes:</p>
        <ul>
          <li><code>/profile</code> - Parent route (Profile component)</li>
          <li><code>/profile/details</code> - Nested route (ProfileDetails)</li>
          <li><code>/profile/settings</code> - Nested route (ProfileSettings)</li>
        </ul>
        <p>The Outlet component renders the appropriate nested route content.</p>
      </div>
    </div>
  );
};

export default Profile;
