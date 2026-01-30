import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore((state) =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div className="recipe-details not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">← Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <div className="details-header">
        <div className="recipe-title-section">
          <div className="title-row">
            <h1>{recipe.title}</h1>
            <FavoriteButton recipeId={recipe.id} />
          </div>
          <div className="recipe-meta">
            {recipe.category && (
              <span className="meta-tag category">{recipe.category}</span>
            )}
            {recipe.difficulty && (
              <span className={`meta-tag difficulty ${recipe.difficulty.toLowerCase()}`}>
                {recipe.difficulty}
              </span>
            )}
            {recipe.prepTime && (
              <span className="meta-time">
                <svg className="time-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {recipe.prepTime} min prep
              </span>
            )}
            {recipe.cookTime && (
              <span className="meta-time">
                <svg className="time-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {recipe.cookTime} min cook
              </span>
            )}
            {recipe.rating && (
              <span className="meta-rating">
                <svg className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {recipe.rating}
              </span>
            )}
          </div>
        </div>
        <div className="action-buttons">
          <Link to="/" className="back-link">← Back to Recipes</Link>
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      </div>
      
      <div className="details-content">
        <div className="section">
          <h3>Description</h3>
          <p className="description">{recipe.description}</p>
        </div>
        
        <div className="section">
          <h3>Ingredients</h3>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p className="no-data">No ingredients listed</p>
          )}
        </div>
        
        <div className="section">
          <h3>Instructions</h3>
          {recipe.instructions ? (
            <div className="instructions">
              {recipe.instructions.split('\n').map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
          ) : (
            <p className="no-data">No instructions provided</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
