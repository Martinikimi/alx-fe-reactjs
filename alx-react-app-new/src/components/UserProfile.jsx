function UserProfile(props) {
  return (
    <div 
      style={{
        border: '2px solid #e0e0e0',
        borderRadius: '15px',
        padding: '25px',
        margin: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        maxWidth: '500px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.borderColor = '#3498db';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.borderColor = '#e0e0e0';
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        <div 
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: '#3498db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '20px',
            color: 'white',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)'
          }}
        >
          {props.name.charAt(0)}
        </div>
        <div>
          <h2 
            style={{
              color: '#2c3e50',
              margin: '0',
              fontSize: '2rem',
              fontWeight: '700'
            }}
          >
            {props.name}
          </h2>
          <p 
            style={{
              color: '#7f8c8d',
              margin: '8px 0 0 0',
              fontSize: '1.1rem'
            }}
          >
            City Explorer
          </p>
        </div>
      </div>
      
      <div 
        style={{
          display: 'flex',
          gap: '25px',
          marginBottom: '20px'
        }}
      >
        <div>
          <p 
            style={{
              color: '#34495e',
              margin: '0 0 8px 0',
              fontSize: '1.1rem'
            }}
          >
            Age:
          </p>
          <span 
            style={{
              fontWeight: 'bold',
              color: '#e74c3c',
              fontSize: '1.4rem',
              display: 'block'
            }}
          >
            {props.age}
          </span>
        </div>
        <div>
          <p 
            style={{
              color: '#34495e',
              margin: '0 0 8px 0',
              fontSize: '1.1rem'
            }}
          >
            From:
          </p>
          <span 
            style={{
              fontWeight: 'bold',
              color: '#2ecc71',
              fontSize: '1.4rem'
            }}
          >
            {props.city}
          </span>
        </div>
      </div>
      
      <div>
        <h3 
          style={{
            color: '#2c3e50',
            margin: '0 0 10px 0',
            fontSize: '1.3rem',
            borderBottom: '2px solid #3498db',
            paddingBottom: '5px'
          }}
        >
          Bio
        </h3>
        <p 
          style={{
            color: '#34495e',
            margin: '0',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}
        >
          {props.bio}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
