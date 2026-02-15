import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    // Summary validation
    if (!formData.summary.trim()) {
      newErrors.summary = 'Summary is required';
    } else if (formData.summary.trim().length < 10) {
      newErrors.summary = 'Summary must be at least 10 characters';
    }

    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please add at least 2 ingredients (one per line)';
      }
    }

    // Instructions validation
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required';
    } else {
      const stepsList = formData.instructions.split('\n').filter(step => step.trim());
      if (stepsList.length < 2) {
        newErrors.instructions = 'Please add at least 2 preparation steps (one per line)';
      }
    }

    // Image URL validation
    if (!formData.image.trim()) {
      newErrors.image = 'Image URL is required';
    } else if (!isValidUrl(formData.image)) {
      newErrors.image = 'Please enter a valid URL';
    }

    // Time validations
    if (!formData.prepTime) {
      newErrors.prepTime = 'Prep time is required';
    } else if (isNaN(formData.prepTime) || parseInt(formData.prepTime) <= 0) {
      newErrors.prepTime = 'Please enter a valid number';
    }

    if (!formData.cookTime) {
      newErrors.cookTime = 'Cook time is required';
    } else if (isNaN(formData.cookTime) || parseInt(formData.cookTime) <= 0) {
      newErrors.cookTime = 'Please enter a valid number';
    }

    // Servings validation
    if (!formData.servings) {
      newErrors.servings = 'Number of servings is required';
    } else if (isNaN(formData.servings) || parseInt(formData.servings) <= 0) {
      newErrors.servings = 'Please enter a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // URL validation helper
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Process ingredients and instructions from textareas to arrays
      const newRecipe = {
        id: Date.now(), // Temporary ID
        title: formData.title,
        summary: formData.summary,
        image: formData.image,
        ingredients: formData.ingredients.split('\n').filter(item => item.trim()),
        instructions: formData.instructions.split('\n').filter(step => step.trim()),
        prepTime: `${formData.prepTime} mins`,
        cookTime: `${formData.cookTime} mins`,
        servings: parseInt(formData.servings)
      };

      // In a real app, you would send this to an API
      console.log('New recipe submitted:', newRecipe);
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        setFormData({
          title: '',
          summary: '',
          ingredients: '',
          instructions: '',
          image: '',
          prepTime: '',
          cookTime: '',
          servings: ''
        });
        setIsSubmitted(false);
        navigate('/');
      }, 3000);
    }
  };

  // Get current year for placeholder image
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Share Your Recipe</h1>
          <p className="text-gray-600">
            Fill in the details below to add your delicious recipe to our collection.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Recipe submitted successfully! Redirecting to home page...
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Title Field */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Recipe Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Spaghetti Carbonara"
            />
            {errors.title && (
              <p className="mt-1 text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Summary Field */}
          <div className="mb-6">
            <label htmlFor="summary" className="block text-gray-700 font-semibold mb-2">
              Short Summary *
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="3"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.summary ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Briefly describe your recipe..."
            />
            {errors.summary && (
              <p className="mt-1 text-red-500 text-sm">{errors.summary}</p>
            )}
          </div>

          {/* Image URL Field */}
          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
              Image URL *
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.image ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={`https://images.unsplash.com/... (You can use images from Unsplash)`}
            />
            {errors.image && (
              <p className="mt-1 text-red-500 text-sm">{errors.image}</p>
            )}
            {formData.image && !errors.image && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <img 
                  src={formData.image} 
                  alt="Preview" 
                  className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
            )}
          </div>

          {/* Time and Servings Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Prep Time */}
            <div>
              <label htmlFor="prepTime" className="block text-gray-700 font-semibold mb-2">
                Prep Time (mins) *
              </label>
              <input
                type="number"
                id="prepTime"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.prepTime ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="15"
              />
              {errors.prepTime && (
                <p className="mt-1 text-red-500 text-sm">{errors.prepTime}</p>
              )}
            </div>

            {/* Cook Time */}
            <div>
              <label htmlFor="cookTime" className="block text-gray-700 font-semibold mb-2">
                Cook Time (mins) *
              </label>
              <input
                type="number"
                id="cookTime"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.cookTime ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="20"
              />
              {errors.cookTime && (
                <p className="mt-1 text-red-500 text-sm">{errors.cookTime}</p>
              )}
            </div>

            {/* Servings */}
            <div>
              <label htmlFor="servings" className="block text-gray-700 font-semibold mb-2">
                Servings *
              </label>
              <input
                type="number"
                id="servings"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.servings ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="4"
              />
              {errors.servings && (
                <p className="mt-1 text-red-500 text-sm">{errors.servings}</p>
              )}
            </div>
          </div>

          {/* Ingredients Field */}
          <div className="mb-6">
            <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
              Ingredients * (one per line)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="200g spaghetti&#10;4 large eggs&#10;100g pancetta&#10;50g parmesan cheese"
            />
            {errors.ingredients && (
              <p className="mt-1 text-red-500 text-sm">{errors.ingredients}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Enter each ingredient on a new line
            </p>
          </div>

          {/* Instructions Field */}
          <div className="mb-6">
            <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">
              Preparation Steps * (one per line)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.instructions ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Boil the pasta according to package instructions&#10;Fry pancetta until crispy&#10;Mix eggs and cheese in a bowl&#10;Combine all ingredients and serve"
            />
            {errors.instructions && (
              <p className="mt-1 text-red-500 text-sm">{errors.instructions}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Enter each step on a new line
            </p>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold"
            >
              Submit Recipe
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
