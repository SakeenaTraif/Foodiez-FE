import { ItemWrapper } from "../styles";
import DeleteButton from "./DeleteButton";

const RecipeItem = ({ recipe }) => {
  return (
    <ItemWrapper className="col-lg-4 col-md-6 col-sm-6">
      <img src={recipe.image} alt={recipe.name} />
      <p className="recipe-name">{recipe.name}</p>
      <DeleteButton recipeId={recipe.id} />
    </ItemWrapper>
  );
};

export default RecipeItem;