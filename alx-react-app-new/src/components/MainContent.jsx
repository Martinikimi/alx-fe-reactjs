function MainContent() {
  return (
    <main 
      style={{
        padding: '40px 20px',
        backgroundColor: '#f5f7fa',
        borderRadius: '20px',
        margin: '0 20px 30px 20px',
        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2 
          style={{
            color: '#2c3e50',
            fontSize: '2.2rem',
            textAlign: 'center',
            margin: '0 0 40px 0',
            paddingBottom: '15px',
            borderBottom: '3px solid #3498db'
          }}
        >
          Featured Cities
        </h2>
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}
        >
          {/* City 1 */}
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <h3 
              style={{
                color: '#e74c3c',
                fontSize: '1.8rem',
                margin: '0 0 15px 0'
              }}
            >
              Paris, France
            </h3>
            <p 
              style={{
                color: '#34495e',
                margin: '0 0 15px 0',
                lineHeight: '1.6'
              }}
            >
              The City of Light, known for its art, fashion, gastronomy, and culture. Home to the Eiffel Tower and Louvre Museum.
            </p>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span 
                style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}
              >
                🇫🇷 Europe
              </span>
              <span 
                style={{
                  fontWeight: 'bold',
                  color: '#2ecc71'
                }}
              >
                Must Visit
              </span>
            </div>
          </div>
          
          {/* City 2 */}
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <h3 
              style={{
                color: '#2ecc71',
                fontSize: '1.8rem',
                margin: '0 0 15px 0'
              }}
            >
              Tokyo, Japan
            </h3>
            <p 
              style={{
                color: '#34495e',
                margin: '0 0 15px 0',
                lineHeight: '1.6'
              }}
            >
              A bustling metropolis that blends ultramodern and traditional, from neon-lit skyscrapers to historic temples.
            </p>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span 
                style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}
              >
                🇯🇵 Asia
              </span>
              <span 
                style={{
                  fontWeight: 'bold',
                  color: '#2ecc71'
                }}
              >
                Top Rated
              </span>
            </div>
          </div>
          
          {/* City 3 */}
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <h3 
              style={{
                color: '#9b59b6',
                fontSize: '1.8rem',
                margin: '0 0 15px 0'
              }}
            >
              New York, USA
            </h3>
            <p 
              style={{
                color: '#34495e',
                margin: '0 0 15px 0',
                lineHeight: '1.6'
              }}
            >
              The city that never sleeps, famous for its cultural diversity, Broadway shows, and iconic skyline.
            </p>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span 
                style={{
                  backgroundColor: '#f39c12',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}
              >
                🇺🇸 North America
              </span>
              <span 
                style={{
                  fontWeight: 'bold',
                  color: '#2ecc71'
                }}
              >
                Popular
              </span>
            </div>
          </div>
        </div>
        
        <div 
          style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center'
          }}
        >
          <h3 
            style={{
              fontSize: '1.8rem',
              margin: '0 0 15px 0'
            }}
          >
            Why Explore Cities?
          </h3>
          <p 
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Cities are living museums of human achievement, blending history, culture, and innovation. 
            Each city tells a unique story through its architecture, food, and people.
          </p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
