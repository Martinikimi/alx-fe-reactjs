import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      marginBottom: '30px'
    }}>
      <h2 style={{
        color: 'navy',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Profile Page
      </h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        This component doesn't receive any props. It simply renders the UserInfo component.
      </p>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
