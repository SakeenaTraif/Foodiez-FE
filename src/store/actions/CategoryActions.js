import instance from "./instance";


// TYPES
import  {ADD_CATEGORY,DELETE_CATEGORY ,FETCH_CATEGORY} from  "./types";

// ACTIONS
export const fetchCategories = () =>{
  return async (dispatch) =>{
    try {
      const response = await instance.get("/categories");
      dispatch({
        type:FETCH_CATEGORY,
        payload:{categories: response.data},});
    } catch (error) {
      console.log(error);}
  };
};

export const addCategory = (newCategory) => {
  return async (dispatch) =>{
    try {
      const fromData = new FormData();
      for (const key in newCategory) fromData.append(key, newCategory[key]);
      const res = await instance.post('/categories',fromData);
      dispatch({
        type: ADD_CATEGORY,
        payload: { newCategory: res.data},});
    } catch (error) {
      console.log(error);}
  };
};
 
export const deleteCategory = (categoryId) => {
    return async (dispatch) =>{
      try {
        await instance.delete(`/categories/${categoryId}`);
        dispatch({
          type: DELETE_CATEGORY,
          payload: { categoryId: categoryId },});
      } catch (error) {
        console.log(error);}
    };
  };