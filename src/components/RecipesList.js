import NewRecipe from "./RecipeForm";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";

const RecipesList = () => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);

  const recipeList = recipes
    .map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />);
    console.log("Hello");
  return (
  
    <div>
      <NewRecipe/>
      {recipeList}
    </div>
  );
};

export default RecipesList;
  