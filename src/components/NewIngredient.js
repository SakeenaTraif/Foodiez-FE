import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIngredient } from "../store/actions/IngredientActions";
import { AddItem,  Add} from "../styles";

const NewIngredient = () => {
  const [ingredient, setIngredient] = useState({
    name: "",
    image:"",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setIngredient({
      name: "",
      image:"",
    });
  };

  const handleImage = (event) =>
    setIngredient({ ...ingredient, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIngredient(ingredient));
    restForm();
  };

  return (
    <AddItem>
    <form class="row g-3" onSubmit={handleSubmit}>
    <div class="col-auto">
        <label className="visually-hidden">Item Name</label>
        <input
          type="text"
          value={ingredient.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div class="col-auto">
        <label className="visually-hidden">Image</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <Add>
      <div className="text-center">
            <button className="btn btn-outline-warning" type="submit">
            +
            </button>
          </div>
      </Add>
      </form>
      </AddItem>
      
  );
};

export default NewIngredient;