function About() {
  return (
    <div style={{
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.8rem',
        marginBottom: '30px',
        textAlign: 'center',
        borderBottom: '3px solid #3498db',
        paddingBottom: '15px'
      }}>
        About Us
      </h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        marginBottom: '50px'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{
            color: '#3498db',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>
            Our Story
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#34495e',
            marginBottom: '20px'
          }}>
            Our company has been providing top-notch services since 1990. We specialize in various fields 
            including technology, marketing, and consultancy. What started as a small team of passionate 
            developers has grown into a leading technology solutions provider.
          </p>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#34495e'
          }}>
            With over 30 years of experience, we've helped thousands of businesses transform their operations 
            and achieve their digital goals through innovative solutions and expert guidance.
          </p>
        </div>
        <div style={{
          flex: '1',
          minWidth: '300px',
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            color: '#2c3e50',
            fontSize: '1.5rem',
            marginBottom: '20px'
          }}>
            Our Mission
          </h3>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#7f8c8d'
          }}>
            To empower businesses with cutting-edge technology solutions that drive growth, 
            efficiency, and innovation in an ever-evolving digital landscape.
          </p>
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginTop: '40px'
      }}>
        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>30+ Years</h3>
          <p>Of industry experience</p>
        </div>
        <div style={{
          backgroundColor: '#f3e5f5',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#7b1fa2', marginBottom: '15px' }}>5000+</h3>
          <p>Successful projects delivered</p>
        </div>
        <div style={{
          backgroundColor: '#e8f5e9',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#388e3c', marginBottom: '15px' }}>200+</h3>
          <p>Expert team members</p>
        </div>
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '25px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#f57c00', marginBottom: '15px' }}>50+</h3>
          <p>Countries served worldwide</p>
        </div>
      </div>
    </div>
  );
}

export default About;
