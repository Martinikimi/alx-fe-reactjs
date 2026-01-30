import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

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
        <h1>{recipe.title}</h1>
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
