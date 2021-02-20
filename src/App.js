//React
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
//components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoriesList from "./components/CategoriesList";
import IngredientsList from "./components/IngredientsList";
import RecipesList from "./components/RecipesList";
import CategoryDetails from "./components/CategoryDetails";

function App() {
  const ingredients = useSelector((state) => state.magic.ingredients);

  return (
    <div>
    <NavBar />
    <Switch>
    <Route path="/categories/:categorySlug">
          <CategoryDetails />
        </Route>
    <Route path="/ingredients">
          <IngredientsList ingredients={ingredients}/>
    </Route>
    <Route path="/categories">
          <CategoriesList  />
    </Route>
    <Route path="/recipes">
          <RecipesList/>
    </Route>
     <Route exact path="/">
          <Home />
     </Route>
     </Switch>
    </div>
  );
}

export default App;
