import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filterRecipes());
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const selectedCategory = useRecipeStore((state) => state.selectedCategory);
  const selectedDifficulty = useRecipeStore((state) => state.selectedDifficulty);
  const maxPrepTime = useRecipeStore((state) => state.maxPrepTime);

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'All' || 
                          selectedDifficulty !== 'All' || maxPrepTime < 60;

  return (
    <div className="recipe-list">
      <div className="list-header">
        <h2>Recipes</h2>
        <div className="results-info">
          <span className="results-count">{recipes.length} recipes found</span>
          {hasActiveFilters && (
            <span className="active-filters">
              (with active filters)
            </span>
          )}
        </div>
      </div>
      
      {recipes.length === 0 ? (
        <div className="no-recipes-found">
          <p>No recipes found matching your search criteria.</p>
          <p>Try adjusting your filters or search term.</p>
        </div>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-card-content">
                <div className="recipe-header">
                  <h3>{recipe.title}</h3>
                  <div className="recipe-actions">
                    <FavoriteButton recipeId={recipe.id} />
                  </div>
                </div>
                
                <div className="recipe-tags">
                  {recipe.category && (
                    <span className="tag category-tag">{recipe.category}</span>
                  )}
                  {recipe.difficulty && (
                    <span className={`tag difficulty-tag ${recipe.difficulty.toLowerCase()}`}>
                      {recipe.difficulty}
                    </span>
                  )}
                </div>
                
                <p className="recipe-description">{recipe.description}</p>
                
                <div className="recipe-details">
                  <div className="detail-item">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{recipe.prepTime} min prep</span>
                  </div>
                  
                  <div className="detail-item">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>{recipe.ingredients?.length || 0} ingredients</span>
                  </div>
                </div>
                
                <div className="recipe-ingredients-preview">
                  <strong>Key Ingredients:</strong>
                  <span className="ingredients-text">
                    {recipe.ingredients?.slice(0, 3).join(', ')}
                    {recipe.ingredients?.length > 3 ? '...' : ''}
                  </span>
                </div>
                
                <Link to={`/recipe/${recipe.id}`} className="view-details-btn">
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
