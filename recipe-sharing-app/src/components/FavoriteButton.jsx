import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const isFavorite = useRecipeStore((state) => state.isFavorite(recipeId));
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    toggleFavorite(recipeId);
  };

  return (
    <button
      onClick={handleClick}
      className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? (
        <svg className="heart-icon filled" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="heart-icon outline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )}
    </button>
  );
};

export default FavoriteButton;
