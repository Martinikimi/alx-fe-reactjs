function Header() {
  return (
    <header 
      style={{
        backgroundColor: 'navy',
        color: 'white',
        textAlign: 'center',
        padding: '30px 20px',
        borderBottom: '4px solid gold',
        fontFamily: 'Arial, Helvetica, sans-serif',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        marginBottom: '30px'
      }}
    >
      <h1 
        style={{
          margin: '0',
          fontSize: '2.8rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        My Favorite Cities
      </h1>
      <p 
        style={{
          margin: '15px 0 0 0',
          fontSize: '1.3rem',
          opacity: '0.9',
          fontStyle: 'italic',
          color: '#f0f0f0'
        }}
      >
        Discover amazing cities around the world
      </p>
    </header>
  );
}

export default Header;
