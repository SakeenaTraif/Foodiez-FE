import { deleteIngredient } from "../store/actions/IngredientActions";
import { useDispatch } from "react-redux";

const DeleteButton = ({ ingredientId }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => dispatch(deleteIngredient(ingredientId))}
    >
      Delete
    </button>
  );
};

export default DeleteButton;