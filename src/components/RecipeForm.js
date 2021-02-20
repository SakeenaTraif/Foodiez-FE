import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../store/actions/RecipeActions";
import { AddRecipe,  Add} from "../styles";


const NewRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    image:"",
    ingredients:[],
    description:"",

  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setRecipe({
      name: "",
      image:"",
      ingredients:[],
      description:"",
    });
  };

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(recipe));
    restForm();
  };

  return (
    <AddRecipe>
      <p>New Recipe ?</p>
    <form class="row g-3" onSubmit={handleSubmit}>
    <div class="col-auto">
        <input
        placeholder="recipe name"
          type="text"
          value={recipe.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div class="col-auto">
        <input
        placeholder="Recipe Name"
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <div class="col-auto">
        <input
          placeholder="ingredients"
          type="text"
          value={recipe.ingredients}
          onChange={handleChange}
          name="ingredients"
          className="form-control"
        />
      </div>
      <div class="col-auto">
        <input
          placeholder="description"
          type="text"
          value={recipe.description}
          onChange={handleChange}
          name="description"
          className="form-control"
        />
      </div>
      
      <div className="text-center" >
            <button className="btn btn-outline-danger" type="submit">
            +
            </button>
          </div>
      
      </form>
      </AddRecipe>
      
  );
};

export default NewRecipe;