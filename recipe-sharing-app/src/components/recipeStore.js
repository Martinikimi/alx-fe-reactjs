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
      category: "Breakfast"
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
      category: "Dinner"
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
      category: "Dessert"
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
      category: "Lunch"
    }
  ],
  
  searchTerm: '',
  selectedCategory: 'All',
  selectedDifficulty: 'All',
  maxPrepTime: 60,
  
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
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
  
  setMaxPrepTime: (time) => set({ maxPrepTime: time }),
  
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
  
  getCategories: () => {
    const { recipes } = get();
    const categories = ['All', ...new Set(recipes.map(recipe => recipe.category).filter(Boolean))];
    return categories;
  },
  
  getDifficulties: () => {
    const { recipes } = get();
    const difficulties = ['All', ...new Set(recipes.map(recipe => recipe.difficulty).filter(Boolean))];
    return difficulties;
  }
}));

export default useRecipeStore;
