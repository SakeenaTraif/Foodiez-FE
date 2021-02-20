import { ItemWrapper } from "../styles";
import DeleteButton from "./DeleteButton";

const IngredientItem = ({ ingredient }) => {
  return (
    <ItemWrapper className="col-lg-4 col-md-6 col-sm-6">
      <img src={ingredient.image} alt={ingredient.name} />
      <p className="Ingredient-name">{ingredient.name}</p>
      <DeleteButton ingredientId={ingredient.id} />
    </ItemWrapper>
  );
};

export default IngredientItem;