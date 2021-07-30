
import './App.css';
import React from 'react'


class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    list: []
  }

  toggleAddRecipeForm = () => {
    this.setState({ isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed })
  }

  handleRecipeNameChange = (event) => {
    const value = event.target.value;
    this.setState({ newRecipeName: value });
  }

  handleRecipeInstructionsChange = (event) => {
    const value = event.target.value;
    this.setState({ newRecipeInstructions: value })
  }

  submitRecipe = (event) => {
    console.log(this.state)
    event.preventDefault()
    this.setState({
      recipes: [
        {
          name: this.state.newRecipeName,
          instructions: this.state.newRecipeInstructions
        }
      ]
    })
  }

  render() {

    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" name="newRecipeName" id="newRecipeName" onChange={this.handleRecipeNameChange} value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <input name="newRecipeInstructions"
          id="newRecipeInstructions"
          onChange={this.handleRecipeInstructionsChange}
          placeholder="write recipe instructions here..."
          value={this.state.newRecipeInstructions}
        />
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
        <p>There are no recipes to list.</p>
      </div>
    )
  }
}

export default App;
