import mealApi from "../api/axiosClient";

// Search Meal by name
export const searchMeals = (name) => mealApi.get(`/search.php?s=${name}`);

// Search Meals by first letter
export const searchByLetter = (letter) => mealApi.get(`/search.php?f=${letter}`);

// Get Meal Details by ID
export const getMealById = (id) => mealApi.get(`/lookup.php?i=${id}`);

// Get a Single Random Meal
export const getRandomMeal = () => mealApi.get(`/random.php`);

// Get All Categories
export const getCategories = () => mealApi.get(`/categories.php`);

// Filter Meals
export const filterByIngredient = (ingredient) => mealApi.get(`/filter.php?i=${ingredient}`);
export const filterByCategory = (category) => mealApi.get(`/filter.php?c=${category}`);
export const filterByArea = (area) => mealApi.get(`/filter.php?a=${area}`);

// List all Categories, Areas, Ingredients
export const getAllCategories = () => mealApi.get(`/list.php?c=list`);
export const getAllAreas = () => mealApi.get(`/list.php?a=list`);
export const getAllIngredients = () => mealApi.get(`/list.php?i=list`);
