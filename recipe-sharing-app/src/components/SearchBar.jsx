import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search recipes by title, description, or ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button onClick={handleClearSearch} className="clear-search-btn">
            Clear
          </button>
        )}
      </div>
      <p className="search-hint">
        Search by recipe name, description, or ingredients
      </p>
    </div>
  );
};

export default SearchBar;
