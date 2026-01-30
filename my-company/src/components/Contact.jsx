import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 500);
  };

  return (
    <div style={{
      padding: '60px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.8rem',
        marginBottom: '40px',
        textAlign: 'center',
        borderBottom: '3px solid #3498db',
        paddingBottom: '15px'
      }}>
        Contact Us
      </h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '50px',
        marginBottom: '50px'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ color: '#3498db', marginBottom: '20px' }}>Get In Touch</h2>
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>📍 Address</h3>
            <p style={{ color: '#7f8c8d' }}>123 Tech Street, Innovation City, IC 10001</p>
          </div>
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>📞 Phone</h3>
            <p style={{ color: '#7f8c8d' }}>+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>✉️ Email</h3>
            <p style={{ color: '#7f8c8d' }}>contact@techcorp.com</p>
          </div>
        </div>
        
        <div style={{ flex: '1', minWidth: '300px' }}>
          <form onSubmit={handleSubmit} style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: '600'
              }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: '600'
              }}>
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: '600'
              }}>
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitted}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: isSubmitted ? '#95a5a6' : '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: isSubmitted ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {isSubmitted ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
