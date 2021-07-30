
import './App.css';
import React from 'react'
import RecipeListItem from './components/recipeListItem'


class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes : [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }
  
  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: target.value});
  }
  

  submitRecipe = (event) => {
    //const submittedRecipe = { name: recipeName, instructions: recipeInstructions }
    
    event.preventDefault()
    let temp = this.state.recipes.slice();
    temp.push(
      {
        name: this.state.newRecipeName,
        instructions :this.state.newRecipeInstructions
      }
    );
    this.setState({recipes: temp});
    console.log(this.state.recipes)
  }

  render(){
  const addNewRecipeForm = (
    <form id="recipe-form" onSubmit={this.submitRecipe}>
      <label htmlFor="newRecipeName">Recipe name: </label>
      <input type="text"
        name="newRecipeName"
        id="newRecipeName"
        onChange={this.handleChange}
        value={this.state.newRecipeName} />
      <label htmlFor="newRecipeInstructions">Instructions:</label>
      <textarea name="newRecipeInstructions"
        id="newRecipeInstructions"
        placeholder="write recipe instructions here..."
        onChange={this.handleChange}
        value={this.state.newRecipeInstructions} />
      <input type="submit" />
    </form>
  )

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        this.state.isAddRecipeFormDisplayed
          ? addNewRecipeForm
        : <button id="add-recipe" onClick={this.toggleAddRecipeForm}> Add Recipe</button>
      }
      {
        this.state.recipes.length > 0 ?
        <ul>
          {this.state.recipes.map(r => <RecipeListItem recipe={r}/>)}
        </ul> :
        <p>There are no recipes to list.</p>
      }
    </div>
  )
  }
}

export default App;
