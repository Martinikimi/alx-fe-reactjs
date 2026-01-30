import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: '40px auto',
      border: '2px solid #e0e0e0'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '30px',
        fontSize: '2rem'
      }}>
        Simple Counter App
      </h2>
      
      <div style={{
        fontSize: '5rem',
        fontWeight: 'bold',
        color: count > 0 ? '#2ecc71' : count < 0 ? '#e74c3c' : '#3498db',
        margin: '30px 0',
        transition: 'color 0.3s ease'
      }}>
        {count}
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <button
          onClick={increment}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#27ae60';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2ecc71';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Increment (+)
        </button>
        
        <button
          onClick={decrement}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c0392b';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e74c3c';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Decrement (-)
        </button>
      </div>
      
      <button
        onClick={reset}
        style={{
          padding: '12px 30px',
          fontSize: '1.1rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#2980b9';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#3498db';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Reset
      </button>
      
      <div style={{
        marginTop: '30px',
        color: '#7f8c8d',
        fontSize: '0.9rem'
      }}>
        <p>Click the buttons to change the count value!</p>
      </div>
    </div>
  );
}

export default Counter;
