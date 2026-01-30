import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    
    const newRecipe = {
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients.split('\n').map(item => item.trim()).filter(item => item),
      instructions: instructions.trim(),
      prepTime: parseInt(prepTime) || 0,
      cookTime: parseInt(cookTime) || 0,
      difficulty: difficulty,
      category: category.trim() || 'Uncategorized'
    };
    
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
    setPrepTime('');
    setCookTime('');
    setDifficulty('Easy');
    setCategory('');
  };

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Recipe Title"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group half-width">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g., Breakfast, Dinner, Dessert"
              className="form-input"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of the recipe"
            className="form-textarea"
            rows="3"
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group third-width">
            <label htmlFor="prepTime">Prep Time (minutes)</label>
            <input
              type="number"
              id="prepTime"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              placeholder="15"
              className="form-input"
              min="0"
            />
          </div>
          
          <div className="form-group third-width">
            <label htmlFor="cookTime">Cook Time (minutes)</label>
            <input
              type="number"
              id="cookTime"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              placeholder="30"
              className="form-input"
              min="0"
            />
          </div>
          
          <div className="form-group third-width">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="form-input"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (one per line) *</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Flour&#10;Sugar&#10;Eggs&#10;..."
            className="form-textarea"
            rows="5"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="instructions">Instructions *</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Step-by-step instructions"
            className="form-textarea"
            rows="6"
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
