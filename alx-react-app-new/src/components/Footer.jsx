function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '40px 20px 20px 20px',
        textAlign: 'center',
        borderTop: '4px solid #3498db',
        marginTop: '40px'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}
        >
          <div>
            <h3 
              style={{
                color: '#3498db',
                fontSize: '1.5rem',
                margin: '0 0 20px 0',
                borderBottom: '2px solid #3498db',
                paddingBottom: '10px',
                display: 'inline-block'
              }}
            >
              About Us
            </h3>
            <p 
              style={{
                color: '#bdc3c7',
                lineHeight: '1.6'
              }}
            >
              We're passionate about exploring cities and sharing our experiences with fellow travelers.
            </p>
          </div>
          
          <div>
            <h3 
              style={{
                color: '#3498db',
                fontSize: '1.5rem',
                margin: '0 0 20px 0',
                borderBottom: '2px solid #3498db',
                paddingBottom: '10px',
                display: 'inline-block'
              }}
            >
              Quick Links
            </h3>
            <ul 
              style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}
            >
              <li 
                style={{
                  marginBottom: '10px'
                }}
              >
                <a 
                  href="#"
                  style={{
                    color: '#bdc3c7',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#3498db';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#bdc3c7';
                  }}
                >
                  Home
                </a>
              </li>
              <li 
                style={{
                  marginBottom: '10px'
                }}
              >
                <a 
                  href="#"
                  style={{
                    color: '#bdc3c7',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#3498db';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#bdc3c7';
                  }}
                >
                  Cities
                </a>
              </li>
              <li 
                style={{
                  marginBottom: '10px'
                }}
              >
                <a 
                  href="#"
                  style={{
                    color: '#bdc3c7',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#3498db';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#bdc3c7';
                  }}
                >
                  Travel Tips
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  style={{
                    color: '#bdc3c7',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#3498db';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#bdc3c7';
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              style={{
                color: '#3498db',
                fontSize: '1.5rem',
                margin: '0 0 20px 0',
                borderBottom: '2px solid #3498db',
                paddingBottom: '10px',
                display: 'inline-block'
              }}
            >
              Contact Info
            </h3>
            <p 
              style={{
                color: '#bdc3c7',
                marginBottom: '10px'
              }}
            >
              📧 contact@cityexplorer.com
            </p>
            <p 
              style={{
                color: '#bdc3c7',
                marginBottom: '10px'
              }}
            >
              📞 +1 (555) 123-4567
            </p>
            <p 
              style={{
                color: '#bdc3c7'
              }}
            >
              🏢 123 Travel Street, Explorer City
            </p>
          </div>
        </div>
        
        <div 
          style={{
            borderTop: '1px solid #34495e',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <p 
            style={{
              margin: '0',
              color: '#bdc3c7'
            }}
          >
            © {currentYear} City Explorer. All rights reserved.
          </p>
          <div 
            style={{
              display: 'flex',
              gap: '20px'
            }}
          >
            <a 
              href="#"
              style={{
                color: '#bdc3c7',
                textDecoration: 'none',
                fontSize: '1.2rem',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3498db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#bdc3c7';
              }}
            >
              Facebook
            </a>
            <a 
              href="#"
              style={{
                color: '#bdc3c7',
                textDecoration: 'none',
                fontSize: '1.2rem',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3498db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#bdc3c7';
              }}
            >
              Twitter
            </a>
            <a 
              href="#"
              style={{
                color: '#bdc3c7',
                textDecoration: 'none',
                fontSize: '1.2rem',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3498db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#bdc3c7';
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
