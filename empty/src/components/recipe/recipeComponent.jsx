import React from "react";
import { RecipeData } from "../../db/RecipeData";
import RecipeCard from "./recipeCard";
import { Link } from "react-router-dom";
// import RecipeSearch from "./SearchCategory";

const RecipeListComponent = () => {
  return (
    <div className="listContainer ">
      {/* <RecipeSearch recipes={RecipeData} /> */}
      <div className="grid grid-cols-3" style={{ marginTop: "50px" }}>
        {RecipeData.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <RecipeCard
                title={recipe.title}
                imageUrl={recipe.image}
                rating={recipe.ratings}
                chef={recipe.chef}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListComponent;
