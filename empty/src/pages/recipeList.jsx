import React from "react";
import RecipeListComponent from "../components/recipe/recipeComponent";
// import RecipeSearch from "../components/recipe/SearchCategory";
import Hero from "../components/hero/Hero";


const RecipeList = () => {
    return (

    <div className="recipeCatAndList">
      {/* <RecipeSearch /> */}
<Hero/>
      <RecipeListComponent />
    </div>
  );
};

export default RecipeList;
