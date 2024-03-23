import React from 'react'
import RecipeListComponent from '../components/recipe/recipeListComponent'
import Categories from '../components/recipe/Categories'


const RecipeList = () => {
  return (
    <div className='recipeCatAndList'>
        <Categories/>
        <RecipeListComponent/>
    </div>
  )
}

export default RecipeList
