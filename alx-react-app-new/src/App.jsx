import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <Header />
      <div 
        style={{
          flex: '1',
          padding: '20px'
        }}
      >
        <h2 
          style={{
            textAlign: 'center',
            color: '#2c3e50',
            fontSize: '2.2rem',
            margin: '20px 0 40px 0'
          }}
        >
          Our Team
        </h2>
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          <UserProfile 
            name="John Smith" 
            age={28} 
            city="New York"
            bio="Passionate traveler with over 50 cities visited. Loves exploring local cuisine and hidden gems."
          />
          <UserProfile 
            name="Maria Garcia" 
            age={32} 
            city="Madrid"
            bio="Architecture enthusiast and food blogger. Specializes in European city tours and cultural experiences."
          />
          <UserProfile 
            name="David Chen" 
            age={25} 
            city="Tokyo"
            bio="Adventure seeker and photographer. Focuses on Asian destinations and sustainable travel."
          />
        </div>
        
        <Counter />
        
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
