import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    title: recipe.title || '',
    description: recipe.description || '',
    ingredients: recipe.ingredients ? recipe.ingredients.join('\n') : '',
    instructions: recipe.instructions || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // Add event.preventDefault() here as required
    event.preventDefault();
    
    const updatedRecipe = {
      ...recipe,
      title: formData.title.trim(),
      description: formData.description.trim(),
      ingredients: formData.ingredients.split('\n').map(item => item.trim()).filter(item => item),
      instructions: formData.instructions.trim()
    };

    updateRecipe(updatedRecipe);
    setIsEditing(false);
    if (onClose) onClose();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      title: recipe.title || '',
      description: recipe.description || '',
      ingredients: recipe.ingredients ? recipe.ingredients.join('\n') : '',
      instructions: recipe.instructions || ''
    });
  };

  if (!isEditing) {
    return (
      <button 
        onClick={() => setIsEditing(true)} 
        className="edit-btn"
      >
        Edit Recipe
      </button>
    );
  }

  return (
    <div className="edit-recipe-form-overlay">
      <div className="edit-recipe-form">
        <h3>Edit Recipe</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              rows="3"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients (one per line)</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="form-textarea"
              rows="5"
              placeholder="Flour&#10;Sugar&#10;Eggs&#10;..."
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              className="form-textarea"
              rows="6"
              placeholder="1. Step one&#10;2. Step two&#10;..."
            />
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Save Changes
            </button>
            <button 
              type="button" 
              onClick={handleCancel}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipeForm;
