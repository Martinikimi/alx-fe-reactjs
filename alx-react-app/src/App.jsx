import './App.css';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div className="App">
            <h1>User Profile Card</h1>
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
            <UserProfile 
                name="Bob" 
                age="30" 
                bio="Software developer and guitar player" 
            />
            <UserProfile 
                name="Charlie" 
                age="28" 
                bio="Travel enthusiast and food blogger" 
            />
        </div>
    );
}

export default App;
