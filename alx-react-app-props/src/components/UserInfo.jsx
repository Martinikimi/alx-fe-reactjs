import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px',
      border: '1px solid #e0e0e0'
    }}>
      <h3 style={{
        color: '#2c3e50',
        marginBottom: '15px'
      }}>
        User Info Component
      </h3>
      <p style={{ color: '#7f8c8d', marginBottom: '15px' }}>
        This intermediate component no longer needs to pass userData props.
      </p>
      <UserDetails />
    </div>
  );
}

export default UserInfo;
