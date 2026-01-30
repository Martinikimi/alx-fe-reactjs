import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search Application</h1>
        <p>Search for any GitHub user by their username</p>
      </header>
      <main>
        <Search />
      </main>
      <footer className="App-footer">
        <p>Built with React & GitHub API</p>
      </footer>
    </div>
  );
}

export default App;
