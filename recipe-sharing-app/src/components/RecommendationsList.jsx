import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Generate recommendations on component mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list empty">
        <h2>Recommended For You</h2>
        <div className="empty-recommendations">
          <svg className="recommendation-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>No recommendations yet</h3>
          <p>Add some recipes to your favorites to get personalized recommendations!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <div className="recommendations-header">
        <h2>Recommended For You</h2>
        <button 
          onClick={generateRecommendations}
          className="refresh-btn"
        >
          <svg className="refresh-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </div>
      
      <div className="recommendations-grid">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="recommendation-card">
            <div className="recommendation-card-content">
              <h3>{recipe.title}</h3>
              
              <p className="recommendation-description">{recipe.description}</p>
              
              <div className="recommendation-details">
                {recipe.category && (
                  <span className="recommendation-tag">{recipe.category}</span>
                )}
                {recipe.difficulty && (
                  <span className={`recommendation-tag difficulty ${recipe.difficulty.toLowerCase()}`}>
                    {recipe.difficulty}
                  </span>
                )}
                {recipe.rating && (
                  <span className="rating">
                    <svg className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {recipe.rating}
                  </span>
                )}
              </div>
              
              <div className="recommendation-reason">
                <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Recommended based on your preferences</span>
              </div>
              
              <Link to={`/recipe/${recipe.id}`} className="try-recipe-btn">
                Try This Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
