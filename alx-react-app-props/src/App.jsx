import { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './context/UserContext';

function App() {
  const [userData, setUserData] = useState({ 
    name: "Jane Doe", 
    email: "jane.doe@example.com",
    age: 28,
    city: "New York",
    bio: "Software developer and travel enthusiast"
  });

  // Function to update user data
  const updateUserData = (newData) => {
    setUserData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        fontFamily: 'Arial, sans-serif'
      }}>
        <header style={{
          backgroundColor: 'navy',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1>User Profile App with Context API</h1>
          <p>Refactored from prop drilling to Context API</p>
        </header>
        
        <main style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px'
        }}>
          <ProfilePage />
          
          <div style={{
            marginTop: '40px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'navy', marginBottom: '15px' }}>About This Implementation</h3>
            <p>This application demonstrates the use of React Context API instead of prop drilling.</p>
            <p>User data is provided at the top level (App.jsx) and consumed directly in UserDetails.jsx without passing props through intermediate components.</p>
            <ul style={{ marginTop: '10px' }}>
              <li>✅ Created UserContext using React.createContext()</li>
              <li>✅ Wrapped components with UserContext.Provider</li>
              <li>✅ Consumed context using useContext hook</li>
              <li>✅ Eliminated prop drilling through intermediate components</li>
            </ul>
          </div>
        </main>
        
        <footer style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <p>React Context API Demo</p>
        </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
