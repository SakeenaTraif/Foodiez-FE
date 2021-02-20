import NewCategory from "./NewItem";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import {BsPlusSquare} from "react-icons/bs";
import { Link } from "react-router-dom";
import {AddItem} from "../styles";

const CategoriesList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);

  const categoryList = categories
    .map((category) => <CategoryItem key={category.id} category={category} />);
  return (
    <div>
      <NewCategory/>
      {categoryList}
    </div>
  );
};

export default CategoriesList;
  