import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import FavoriteButton from './FavoriteButton';

const FavoritesList = () => {
  const favoriteRecipes = useRecipeStore((state) => state.getFavoriteRecipes());

  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-list empty">
        <h2>My Favorites</h2>
        <div className="empty-favorites">
          <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3>No favorites yet</h3>
          <p>Click the heart icon on any recipe to add it to your favorites!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <div className="favorites-header">
        <h2>My Favorites</h2>
        <span className="favorites-count">{favoriteRecipes.length} recipes</span>
      </div>
      
      <div className="favorites-grid">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="favorite-card">
            <div className="favorite-card-content">
              <div className="favorite-card-header">
                <h3>{recipe.title}</h3>
                <FavoriteButton recipeId={recipe.id} />
              </div>
              
              <p className="favorite-description">{recipe.description}</p>
              
              <div className="favorite-details">
                {recipe.category && (
                  <span className="favorite-tag">{recipe.category}</span>
                )}
                {recipe.difficulty && (
                  <span className={`favorite-tag difficulty ${recipe.difficulty.toLowerCase()}`}>
                    {recipe.difficulty}
                  </span>
                )}
                {recipe.prepTime && (
                  <span className="prep-time">
                    <svg className="time-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {recipe.prepTime} min
                  </span>
                )}
              </div>
              
              <Link to={`/recipe/${recipe.id}`} className="view-recipe-btn">
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
