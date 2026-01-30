import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    setShowConfirm(false);
    navigate('/');
  };

  if (showConfirm) {
    return (
      <div className="delete-confirmation">
        <p>Are you sure you want to delete this recipe?</p>
        <div className="confirmation-buttons">
          <button onClick={handleDelete} className="confirm-delete-btn">
            Yes, Delete
          </button>
          <button onClick={() => setShowConfirm(false)} className="cancel-delete-btn">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button 
      onClick={() => setShowConfirm(true)} 
      className="delete-btn"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
