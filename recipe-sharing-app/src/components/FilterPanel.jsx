import React from 'react';
import useRecipeStore from './recipeStore';

const FilterPanel = () => {
  const categories = useRecipeStore((state) => state.getCategories());
  const difficulties = useRecipeStore((state) => state.getDifficulties());
  const selectedCategory = useRecipeStore((state) => state.selectedCategory);
  const selectedDifficulty = useRecipeStore((state) => state.selectedDifficulty);
  const maxPrepTime = useRecipeStore((state) => state.maxPrepTime);
  
  const setSelectedCategory = useRecipeStore((state) => state.setSelectedCategory);
  const setSelectedDifficulty = useRecipeStore((state) => state.setSelectedDifficulty);
  const setMaxPrepTime = useRecipeStore((state) => state.setMaxPrepTime);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setMaxPrepTime(60);
  };

  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      
      <div className="filter-group">
        <label htmlFor="category-filter" className="filter-label">
          Category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="difficulty-filter" className="filter-label">
          Difficulty
        </label>
        <select
          id="difficulty-filter"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="filter-select"
        >
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="prep-time-filter" className="filter-label">
          Max Prep Time: {maxPrepTime} minutes
        </label>
        <input
          id="prep-time-filter"
          type="range"
          min="5"
          max="120"
          step="5"
          value={maxPrepTime}
          onChange={(e) => setMaxPrepTime(parseInt(e.target.value))}
          className="filter-slider"
        />
        <div className="time-labels">
          <span>5 min</span>
          <span>120 min</span>
        </div>
      </div>
      
      <button onClick={handleResetFilters} className="reset-filters-btn">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;
