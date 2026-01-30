import UserContext from './UserContext'; 
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  const { userData, updateUserData } = useContext(UserContext);

  const handleNameChange = () => {
    const newName = prompt("Enter new name:", userData.name);
    if (newName) {
      updateUserData({ name: newName });
    }
  };

  const handleEmailChange = () => {
    const newEmail = prompt("Enter new email:", userData.email);
    if (newEmail) {
      updateUserData({ email: newEmail });
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '25px',
      border: '2px solid #3498db'
    }}>
      <h3 style={{
        color: 'navy',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        User Details (Using Context API)
        <span style={{
          fontSize: '0.8rem',
          backgroundColor: '#3498db',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '15px'
        }}>
          useContext Hook
        </span>
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '25px'
      }}>
        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '15px',
          borderRadius: '8px'
        }}>
          <p style={{ 
            color: '#1976d2', 
            fontWeight: 'bold',
            marginBottom: '5px'
          }}>
            Name
          </p>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '10px'
          }}>
            {userData.name}
          </p>
          <button
            onClick={handleNameChange}
            style={{
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Change Name
          </button>
        </div>
        
        <div style={{
          backgroundColor: '#f3e5f5',
          padding: '15px',
          borderRadius: '8px'
        }}>
          <p style={{ 
            color: '#7b1fa2', 
            fontWeight: 'bold',
            marginBottom: '5px'
          }}>
            Email
          </p>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '10px'
          }}>
            {userData.email}
          </p>
          <button
            onClick={handleEmailChange}
            style={{
              backgroundColor: '#7b1fa2',
              color: 'white',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Change Email
          </button>
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginTop: '20px'
      }}>
        <div style={{
          backgroundColor: '#f1f8e9',
          padding: '12px',
          borderRadius: '6px'
        }}>
          <p style={{ 
            color: '#33691e', 
            fontSize: '0.9rem',
            marginBottom: '5px'
          }}>
            Age
          </p>
          <p style={{ fontSize: '1.1rem' }}>{userData.age}</p>
        </div>
        
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '12px',
          borderRadius: '6px'
        }}>
          <p style={{ 
            color: '#e65100', 
            fontSize: '0.9rem',
            marginBottom: '5px'
          }}>
            City
          </p>
          <p style={{ fontSize: '1.1rem' }}>{userData.city}</p>
        </div>
        
        <div style={{
          backgroundColor: '#fce4ec',
          padding: '12px',
          borderRadius: '6px'
        }}>
          <p style={{ 
            color: '#c2185b', 
            fontSize: '0.9rem',
            marginBottom: '5px'
          }}>
            Bio
          </p>
          <p style={{ fontSize: '1rem' }}>{userData.bio}</p>
        </div>
      </div>
      
      <div style={{
        marginTop: '25px',
        padding: '15px',
        backgroundColor: '#e8f5e9',
        borderRadius: '8px',
        borderLeft: '4px solid #4caf50'
      }}>
        <p style={{ 
          color: '#1b5e20', 
          fontSize: '0.9rem',
          margin: '0'
        }}>
          <strong>Note:</strong> This component accesses user data directly from Context using useContext(),
          without receiving it as props from parent components.
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
