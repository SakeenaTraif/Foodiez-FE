import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IngredientsList from "./IngredientsList";
import NewIngredient from "./NewIngredient";

const CategoryDetails = () => {
  const categorySlug = useParams().categorySlug;
  console.log(categorySlug);
  const allIngredients = useSelector((state) => state.magic.ingredients);
  const category = useSelector((state) =>
    state.categoryReducer.categories
    .find((category) => category.slug === categorySlug)
  );
  if (!category) return <Redirect to="/categories" />;
  const ingredients = category.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );

  console.log(ingredients);
  return (
    <>
        <h1>{category.name}</h1>
        <NewIngredient/>
      {ingredients.length > 0 ?<IngredientsList ingredients={ingredients} /> : "NO ingredents"}
    </>
  );
};

export default CategoryDetails;