function Services() {
  const services = [
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy, implementation, and optimization.",
      icon: "💻",
      color: "#3498db"
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market research and competitive analysis for strategic planning.",
      icon: "📊",
      color: "#2ecc71"
    },
    {
      title: "Product Development",
      description: "End-to-end product development from ideation to launch and maintenance.",
      icon: "🚀",
      color: "#e74c3c"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: "☁️",
      color: "#9b59b6"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      icon: "🔒",
      color: "#f39c12"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence.",
      icon: "📈",
      color: "#1abc9c"
    }
  ];

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
        marginBottom: '50px',
        textAlign: 'center',
        borderBottom: '3px solid #3498db',
        paddingBottom: '15px'
      }}>
        Our Services
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px'
      }}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              borderTop: `5px solid ${service.color}`,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px'
            }}>
              {service.icon}
            </div>
            <h3 style={{
              color: service.color,
              fontSize: '1.8rem',
              marginBottom: '15px'
            }}>
              {service.title}
            </h3>
            <p style={{
              color: '#7f8c8d',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              {service.description}
            </p>
            <button
              style={{
                marginTop: '20px',
                padding: '10px 25px',
                backgroundColor: service.color,
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
