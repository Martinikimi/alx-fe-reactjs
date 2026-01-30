import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Recipe Sharing Application</h1>
          <p>Share and discover delicious recipes</p>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Add Recipe</Link>
            <Link to="/favorites" className="nav-link">My Favorites</Link>
            <Link to="/recommendations" className="nav-link">Recommendations</Link>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={
              <>
                <div className="search-section">
                  <SearchBar />
                  <div className="content-layout">
                    <div className="sidebar">
                      <FilterPanel />
                      <div className="sidebar-widget">
                        <RecommendationsList />
                      </div>
                    </div>
                    <div className="main-content">
                      <RecipeList />
                    </div>
                  </div>
                </div>
              </>
            } />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={
              <div className="favorites-page">
                <h2>My Favorite Recipes</h2>
                <FavoritesList />
              </div>
            } />
            <Route path="/recommendations" element={
              <div className="recommendations-page">
                <h2>Personalized Recommendations</h2>
                <RecommendationsList />
              </div>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>Built with React, Zustand & React Router</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
