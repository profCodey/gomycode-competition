import React from 'react'
import {recipes} from '../../db/recipe'
import RecipeCard from './recipeCard'
import RecipeSearch from './SearchCategory'


const RecipeListComponent = () => {
  return (
    <div className='listContainer'>
       <RecipeSearch recipes={recipes}/>
        {/* <ul className='recipeList'>
            {recipes.map((recipe) => (
                <li key ={recipe.id} >
                    <RecipeCard 
                    title={recipe.title} 
                    imageUrl={recipe.imageUrl} 
                    rating={recipe.rating} 
                    chef={recipe.chef}
                    />
                </li>))
            }
        </ul> */}
    </div>
  )
}

export default RecipeListComponent