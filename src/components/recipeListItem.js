import React from 'react'

const RecipeListItem = (props) => {

    return(
      <li> 
        <p>{props.recipe.name}</p>
          <p>{props.recipe.instructions}</p>   
      </li> 
            
      
    )
}

export default RecipeListItem