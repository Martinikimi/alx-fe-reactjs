function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '40px 20px 20px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{ color: '#3498db', marginBottom: '20px' }}>TechCorp</h3>
            <p style={{ color: '#bdc3c7', lineHeight: '1.6' }}>
              Empowering businesses with innovative technology solutions since 1990.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Home</a>
              <a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>About Us</a>
              <a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Services</a>
              <a href="#" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Connect With Us</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#34495e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span>f</span>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#34495e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span>t</span>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#34495e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span>in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '20px',
          textAlign: 'center',
          color: '#95a5a6'
        }}>
          <p>© {currentYear} TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
