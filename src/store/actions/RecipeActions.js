import instance from "./instance";


// TYPES
import  {ADD_RECIPE,DELETE_RECIPE ,FETCH_RECIPE} from  "./types";

// ACTIONS
export const fetchRecipes = () =>{
  return async (dispatch) =>{
    try {
      const response = await instance.get("/recipes");
      dispatch({
        type:FETCH_RECIPE,
        payload:{recipes: response.data},});
    } catch (error) {
      console.log(error);}
  };
};

export const addRecipe = (newRecipe) => {
  return async (dispatch) =>{
    try {
      const fromData = new FormData();
      for (const key in newRecipe) fromData.append(key, newRecipe[key]);
      const res = await instance.post('/recipes',fromData);
      dispatch({
        type: ADD_RECIPE,
        payload: { newRecipe: res.data},});
    } catch (error) {
      console.log(error);}
  };
};
 
export const deleteRecipe = (recipeId) => {
    return async (dispatch) =>{
      try {
        await instance.delete(`/recipes/${recipeId}`);
        dispatch({
          type: DELETE_RECIPE ,
          payload: { recipeId: recipeId },});
      } catch (error) {
        console.log(error);}
    };
  };