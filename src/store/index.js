import {fetchIngredients} from "./actions/IngredientActions";
import {fetchCategories} from "./actions/CategoryActions";
import {fetchRecipes} from "./actions/RecipeActions";
import {applyMiddleware,compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware (thunk)));
store.dispatch(fetchIngredients());
store.dispatch(fetchCategories());
store.dispatch(fetchRecipes());

export default store;