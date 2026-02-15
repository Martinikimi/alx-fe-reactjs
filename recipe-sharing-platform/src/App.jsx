import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Recipe Sharing Platform
                </h1>
                <p className="text-orange-500 mt-2">
                  Share your favorite recipes with the world!
                </p>
              </div>
              <Link
                to="/add-recipe"
                className="mt-4 sm:mt-0 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Recipe
              </Link>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>
        <footer className="bg-white shadow-sm mt-8">
          <div className="container mx-auto px-4 py-4 text-center text-gray-600">
            <p>&copy; 2024 Recipe Sharing Platform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
