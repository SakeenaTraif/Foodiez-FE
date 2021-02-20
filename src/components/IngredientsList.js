import NewCategory from "./NewItem";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import IngredientItem from "./IngredientItem";

const IngredientsList = ({ingredients=[]}) => {

  const ingredientsList = ingredients
    .map((ingredient) => <IngredientItem ingredient={ingredient} key={ingredient.id} />);
  return (
    <div>
      
      {ingredientsList}
    </div>
  );
};

export default IngredientsList;
  