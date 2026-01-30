import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Sharing Application</h1>
        <p>Share and discover delicious recipes</p>
      </header>
      <main className="App-main">
        <AddRecipeForm />
        <RecipeList />
      </main>
      <footer className="App-footer">
        <p>Built with React & Zustand</p>
      </footer>
    </div>
  );
}

export default App;
