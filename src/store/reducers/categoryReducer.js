import * as types from "../actions/types";

const initialState = {
    categories:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORY:
      return{
      ...state,
      categories: action.payload.categories,};

    case types.ADD_CATEGORY:
      const { newCategory } = action.payload;
      return {
        ...state,
        categories: [...state.categories, newCategory],};

     case types.DELETE_CATEGORY:
        return {
         ...state,
         categories: state.categories.filter(
        (category) => category.id !== action.payload.categoryId),};

    default:
      return state;
  }
};

export default reducer;