function UserProfile(props) {
  return (
    <div 
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '15px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        maxWidth: '500px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px'
        }}
      >
        <div 
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'blue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '15px',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          {props.name.charAt(0)}
        </div>
        <div>
          <h2 
            style={{
              color: 'blue',
              margin: '0',
              fontSize: '1.8rem',
              fontWeight: '600'
            }}
          >
            {props.name}
          </h2>
          <p 
            style={{
              color: '#7f8c8d',
              margin: '5px 0 0 0',
              fontSize: '1rem'
            }}
          >
            City Explorer
          </p>
        </div>
      </div>
      
      <div 
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '15px'
        }}
      >
        <div>
          <p 
            style={{
              color: 'blue',
              margin: '0 0 8px 0',
              fontSize: '1.1rem'
            }}
          >
            Age:
          </p>
          <span 
            style={{
              fontWeight: 'bold',
              color: 'blue',
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
              color: 'blue',
              margin: '0 0 8px 0',
              fontSize: '1.1rem'
            }}
          >
            From:
          </p>
          <span 
            style={{
              fontWeight: 'bold',
              color: 'blue',
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
            color: 'blue',
            margin: '0 0 10px 0',
            fontSize: '1.3rem',
            borderBottom: '2px solid blue',
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
