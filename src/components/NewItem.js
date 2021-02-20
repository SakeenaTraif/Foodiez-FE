import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../store/actions/CategoryActions";
import { AddItem,  Add} from "../styles";
import {BsPlusSquare} from "react-icons/bs";


const NewCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    image:"",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setCategory({
      name: "",
      image:"",
    });
  };

  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory(category));
    restForm();
  };

  return (
    <AddItem>
    <form class="row g-3" onSubmit={handleSubmit}>
    <div class="col-auto">
        <label className="visually-hidden">Item Name</label>
        <input
          type="text"
          value={category.name}
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

export default NewCategory;