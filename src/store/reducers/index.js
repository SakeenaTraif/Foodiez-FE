import {combineReducers} from "redux";

import ingredientReducer from "./ingredientReducer";
import categoryReducer from "./categoryReducer";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
    magic: ingredientReducer,
    categoryReducer,
    recipeReducer,
});

export default rootReducer;