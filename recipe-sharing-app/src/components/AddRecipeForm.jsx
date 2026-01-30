import { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    
    addRecipe({ 
      id: Date.now(), 
      title: title.trim(), 
      description: description.trim() 
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            className="form-textarea"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
