import instance from "./instance";

// TYPES
import  {ADD_INGREDIENT,DELETE_INGREDIENT ,FETCH_INGREDIENT} from  "./types";

// ACTIONS
export const fetchIngredients = () =>{
  return async (dispatch) =>{
    try {
      const response = await instance.get("/ingredients");
      dispatch({
        type:FETCH_INGREDIENT,
        payload:{ingredients: response.data},});
    } catch (error) {
      console.log(error);}
  };
};

export const addIngredient = (newIngredient) => {
  console.log(newIngredient);
  return async (dispatch) =>{
    try {
      const fromData = new FormData();
      for (const key in newIngredient) fromData.append(key, newIngredient[key]);
      const res = await instance.post(`/categories/${newIngredient.categoryId}/ingredients`,fromData);
      dispatch({
        type: ADD_INGREDIENT,
        payload: { newIngredient: res.data},});
        
    } catch (error) {
      console.log(error);}
  };
};

 
export const deleteIngredient = (ingredientId) => {
    return async (dispatch) =>{
      try {
        await instance.delete(`/ingredients/${ingredientId}`);
        dispatch({
          type: DELETE_INGREDIENT,
          payload: { ingredientId: ingredientId },});
      } catch (error) {
        console.log(error);}
    };
  };