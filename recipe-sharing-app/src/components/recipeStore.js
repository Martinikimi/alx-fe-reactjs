import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Pancakes",
      description: "Fluffy homemade pancakes perfect for breakfast",
      ingredients: ["Flour", "Milk", "Eggs", "Baking Powder", "Sugar", "Salt"],
      instructions: "1. Mix dry ingredients\n2. Add wet ingredients\n3. Cook on griddle\n4. Serve with syrup"
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      description: "Creamy Italian pasta dish with eggs and cheese",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
      instructions: "1. Cook spaghetti\n2. Fry pancetta\n3. Mix eggs and cheese\n4. Combine everything"
    }
  ],
  
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
  
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
