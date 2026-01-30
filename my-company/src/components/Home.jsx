function Home() {
  return (
    <div style={{
      padding: '60px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '3.5rem',
        marginBottom: '20px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
      }}>
        Welcome to TechCorp
      </h1>
      <p style={{
        fontSize: '1.4rem',
        maxWidth: '800px',
        marginBottom: '40px',
        lineHeight: '1.6'
      }}>
        We are dedicated to delivering excellence in all our services. 
        Transforming businesses with innovative technology solutions since 2010.
      </p>
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          width: '250px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Innovation</h3>
          <p>Cutting-edge technology solutions tailored to your needs</p>
        </div>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          width: '250px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Quality</h3>
          <p>Uncompromising quality in every project we undertake</p>
        </div>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          width: '250px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Support</h3>
          <p>24/7 dedicated support for all our clients</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
