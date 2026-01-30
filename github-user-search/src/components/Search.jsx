import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import './Search.css';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      // Display the exact error message as specified
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h2>Search GitHub Users</h2>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && (
        <div className="loading-message">Loading...</div>
      )}

      {error && (
        <div className="error-message">
          Looks like we cant find the user
        </div>
      )}

      {userData && !loading && !error && (
        <div className="user-card">
          <img 
            src={userData.avatar_url} 
            alt={userData.login} 
            className="user-avatar"
          />
          <div className="user-info">
            <h3>{userData.name || userData.login}</h3>
            <p className="user-bio">{userData.bio || 'No bio available'}</p>
            <div className="user-stats">
              <span>Followers: {userData.followers}</span>
              <span>Following: {userData.following}</span>
              <span>Repos: {userData.public_repos}</span>
            </div>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
