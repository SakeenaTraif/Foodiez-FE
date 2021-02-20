import * as types from "../actions/types";

const initialState = {
    recipes:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPE:
      return{
      ...state,
      recipes: action.payload.recipes,};

    case types.ADD_RECIPE:
      const { newRecipe } = action.payload;
      return {
        ...state,
        recipes: [...state.recipes, newRecipe],};

     case types.DELETE_RECIPE:
        return {
         ...state,
         recipes: state.recipes.filter(
        (recipe) =>recipe.id !== action.payload.recipeId),};

    default:
      return state;
  }
};

export default reducer;