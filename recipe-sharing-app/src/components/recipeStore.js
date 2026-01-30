import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Pancakes",
      description: "Fluffy homemade pancakes perfect for breakfast",
      ingredients: ["Flour", "Milk", "Eggs", "Baking Powder", "Sugar", "Salt"],
      instructions: "1. Mix dry ingredients\n2. Add wet ingredients\n3. Cook on griddle\n4. Serve with syrup",
      prepTime: 15,
      cookTime: 10,
      difficulty: "Easy",
      category: "Breakfast",
      rating: 4.5
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      description: "Creamy Italian pasta dish with eggs and cheese",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
      instructions: "1. Cook spaghetti\n2. Fry pancetta\n3. Mix eggs and cheese\n4. Combine everything",
      prepTime: 20,
      cookTime: 15,
      difficulty: "Medium",
      category: "Dinner",
      rating: 4.8
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies",
      ingredients: ["Butter", "Sugar", "Flour", "Chocolate Chips", "Vanilla Extract", "Baking Soda"],
      instructions: "1. Cream butter and sugar\n2. Add flour and chocolate chips\n3. Bake at 350°F for 12 minutes",
      prepTime: 15,
      cookTime: 12,
      difficulty: "Easy",
      category: "Dessert",
      rating: 4.7
    },
    {
      id: 4,
      title: "Vegetable Stir Fry",
      description: "Healthy vegetable stir fry with tofu",
      ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Tofu", "Soy Sauce", "Ginger"],
      instructions: "1. Chop vegetables\n2. Stir fry with tofu\n3. Add sauce and serve",
      prepTime: 20,
      cookTime: 15,
      difficulty: "Easy",
      category: "Lunch",
      rating: 4.3
    },
    {
      id: 5,
      title: "Avocado Toast",
      description: "Simple and nutritious avocado toast",
      ingredients: ["Bread", "Avocado", "Lemon Juice", "Salt", "Pepper", "Red Pepper Flakes"],
      instructions: "1. Toast bread\n2. Mash avocado\n3. Spread on toast\n4. Season to taste",
      prepTime: 5,
      cookTime: 5,
      difficulty: "Easy",
      category: "Breakfast",
      rating: 4.2
    },
    {
      id: 6,
      title: "Beef Tacos",
      description: "Delicious ground beef tacos with fresh toppings",
      ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Tomato", "Cheese", "Sour Cream"],
      instructions: "1. Cook beef with seasoning\n2. Warm taco shells\n3. Assemble tacos with toppings",
      prepTime: 15,
      cookTime: 10,
      difficulty: "Easy",
      category: "Dinner",
      rating: 4.6
    }
  ],
  
  // Favorites state
  favorites: [1, 3], // Initial favorite recipe IDs
  
  // Search and filter state
  searchTerm: '',
  selectedCategory: 'All',
  selectedDifficulty: 'All',
  maxPrepTime: 60,
  
  // Recommendations state
  recommendations: [],
  
  // Recipe CRUD actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filter actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
  
  setMaxPrepTime: (time) => set({ maxPrepTime: time }),
  
  // Filter recipes based on search and filters
  filterRecipes: () => {
    const { recipes, searchTerm, selectedCategory, selectedDifficulty, maxPrepTime } = get();
    
    return recipes.filter(recipe => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      // Category filter
      const matchesCategory = selectedCategory === 'All' || 
        recipe.category === selectedCategory;
      
      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === 'All' || 
        recipe.difficulty === selectedDifficulty;
      
      // Prep time filter
      const matchesPrepTime = recipe.prepTime <= maxPrepTime;
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesPrepTime;
    });
  },
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => {
    // Check if already in favorites
    if (state.favorites.includes(recipeId)) {
      return state;
    }
    return { favorites: [...state.favorites, recipeId] };
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  toggleFavorite: (recipeId) => set((state) => {
    const isFavorite = state.favorites.includes(recipeId);
    if (isFavorite) {
      return { favorites: state.favorites.filter(id => id !== recipeId) };
    } else {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),
  
  // Check if a recipe is favorited
  isFavorite: (recipeId) => get().favorites.includes(recipeId),
  
  // Get favorite recipes
  getFavoriteRecipes: () => {
    const { recipes, favorites } = get();
    return recipes.filter(recipe => favorites.includes(recipe.id));
  },
  
  // Recommendations actions
  generateRecommendations: () => set((state) => {
    const { recipes, favorites } = state;
    
    if (favorites.length === 0) {
      // If no favorites, recommend popular/high-rated recipes
      const recommended = [...recipes]
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 3);
      return { recommendations: recommended };
    }
    
    // Get user's favorite categories and difficulties
    const favoriteCategories = [];
    const favoriteDifficulties = [];
    
    favorites.forEach(favId => {
      const recipe = recipes.find(r => r.id === favId);
      if (recipe) {
        if (recipe.category && !favoriteCategories.includes(recipe.category)) {
          favoriteCategories.push(recipe.category);
        }
        if (recipe.difficulty && !favoriteDifficulties.includes(recipe.difficulty)) {
          favoriteDifficulties.push(recipe.difficulty);
        }
      }
    });
    
    // Recommend recipes similar to favorites but not already favorited
    const recommended = recipes
      .filter(recipe => {
        // Don't recommend already favorited recipes
        if (favorites.includes(recipe.id)) return false;
        
        // Check if recipe matches user's preferences
        const matchesCategory = favoriteCategories.length === 0 || 
                               favoriteCategories.includes(recipe.category);
        const matchesDifficulty = favoriteDifficulties.length === 0 || 
                                 favoriteDifficulties.includes(recipe.difficulty);
        
        return matchesCategory || matchesDifficulty;
      })
      .sort((a, b) => {
        // Sort by relevance (matching categories/difficulties) then by rating
        const aScore = (favoriteCategories.includes(a.category) ? 2 : 0) + 
                      (favoriteDifficulties.includes(a.difficulty) ? 1 : 0);
        const bScore = (favoriteCategories.includes(b.category) ? 2 : 0) + 
                      (favoriteDifficulties.includes(b.difficulty) ? 1 : 0);
        
        if (bScore !== aScore) return bScore - aScore;
        return (b.rating || 0) - (a.rating || 0);
      })
      .slice(0, 3);
    
    return { recommendations: recommended };
  }),
  
  // Clear recommendations
  clearRecommendations: () => set({ recommendations: [] }),
  
  // Get categories for filters
  getCategories: () => {
    const { recipes } = get();
    const categories = ['All', ...new Set(recipes.map(recipe => recipe.category).filter(Boolean))];
    return categories;
  },
  
  // Get difficulties for filters
  getDifficulties: () => {
    const { recipes } = get();
    const difficulties = ['All', ...new Set(recipes.map(recipe => recipe.difficulty).filter(Boolean))];
    return difficulties;
  }
}));

export default useRecipeStore;
