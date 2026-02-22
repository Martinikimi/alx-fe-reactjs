import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import '../Pages.css';

const ProfileSettings = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSaveSettings = () => {
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="profile-settings">
      <h2>Account Settings</h2>

      {saveMessage && (
        <div className="success-message">{saveMessage}</div>
      )}

      <div className="settings-card">
        <h3>Preferences</h3>
        
        <div className="setting-item">
          <div className="setting-info">
            <label>Email Notifications</label>
            <p>Receive email updates about your account</p>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Dark Mode</label>
            <p>Switch to dark theme</p>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Weekly Newsletter</label>
            <p>Receive our weekly newsletter with updates</p>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={emailUpdates}
              onChange={(e) => setEmailUpdates(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="settings-card">
        <h3>Account Information</h3>
        
        <div className="account-info">
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Account Status:</strong> Active</p>
          <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
        </div>

        <button onClick={handleSaveSettings} className="save-settings-btn">
          Save Settings
        </button>
      </div>

      <div className="info-box">
        <h4>⚙️ Settings Page</h4>
        <p>
          This is another nested route: <code>/profile/settings</code>
        </p>
        <p>
          Both ProfileDetails and ProfileSettings are rendered through the same
          Outlet component in the parent Profile route.
        </p>
      </div>
    </div>
  );
};

export default ProfileSettings;
