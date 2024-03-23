import React from "react";
import { RecipeData } from "../../db/RecipeData";
import RecipeCard from "./recipeCard";
// import RecipeSearch from "./SearchCategory";

const RecipeListComponent = () => {
  return (
    <div className="listContainer">
      {/* <RecipeSearch recipes={RecipeData} /> */}
      <div className="grid grid-cols-3 grid-y-5">
        {RecipeData.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard
              title={recipe.title}
              imageUrl={recipe.image}
              rating={recipe.ratings}
              chef={recipe.chef}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListComponent;
