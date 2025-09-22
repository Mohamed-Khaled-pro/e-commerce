import mealApi from "../api/axiosClient";

// Search Meal by name 
export const searchMeals=(name)=>mealApi.get(`/search.php?s=${name}`)

// all meals by first letter
export const searchByLetter = (letter)=>mealApi.get(`/search.php?f=${letter}`)

// Get meal Details (All Details)
export const getMealById = (id)=>mealApi.get(`/lookup.php?i=${id}`)

// Single Random Meal
export const getRandomMeal = () => mealApi.get(`/random.php`);
 
// All Categories
export const getCategories = () =>mealApi.get(`/categories.php`);

//  Filter meals (Ingredient)
export const filterByIngredient = (ingredient) =>  mealApi.get(`/filter.php?i=${ingredient}`);

// Filter meals (Category)
export const filterByCategory = (category) =>  mealApi.get(`/filter.php?c=${category}`);

// Filter meals (Area)
export const filterByArea = (area) => mealApi.get(`/filter.php?a=${area}`);
 

// List all Categories, Area, Ingredients 
export const getAllCategories = () =>mealApi.get(`/list.php?c=list`);
  

export const getAllAreas = () => mealApi.get(`/list.php?a=list`);


export const getAllIngredients = () => mealApi.get(`/list.php?i=list`);
 
  