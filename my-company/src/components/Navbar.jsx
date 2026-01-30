import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#3498db',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}>
          C
        </div>
        <span style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          TechCorp
        </span>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '25px'
      }}>
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3498db';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3498db';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          About
        </Link>
        <Link 
          to="/services" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3498db';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3498db';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
