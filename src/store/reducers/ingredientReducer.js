import * as types from "../actions/types";

const initialState = {
    ingredients:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INGREDIENT:
      return{
      ...state,
      ingredients: action.payload.ingredients,};

    case types.ADD_INGREDIENT:
      const { newIngredient } = action.payload;
      return {
        ...state,
        categories: [...state.ingredients, newIngredient],};

     case types.DELETE_INGREDIENT:
        return {
         ...state,
         ingredients: state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload.ingredientId),};

    default:
      return state;
  }
};

export default reducer;