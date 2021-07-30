import React from 'react'
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';


describe('recipe collection', () => {

  test('Add recipe button toggles visibility of a form on the page ', () => {

    render(<App />);
    // `queryBy...` methods will return null if the element is not found:
    const recipeForm = screen.queryByText("Instructions:");
  
    // `getBy...` methods will "throw" an error if the element is not found:
    // const recipeForm = screen.getByText("Instructions:");
  
    expect(recipeForm).toBeNull();
    userEvent.click(screen.getByText("Add Recipe"));
  
    expect(screen.getByLabelText("Instructions:")).toBeInTheDocument();
  });

  it('typing in the recipe name makes the recipe name appear in the input', async () => {
    render(<App />);
  
    const recipeName = 'No pockets';
    userEvent.click(screen.getByText("Add Recipe"));
    await userEvent.type(screen.getByLabelText('Recipe name:'), recipeName);
  
    expect(screen.getByLabelText('Recipe name:').value).toEqual(recipeName);
  })

 
  it('renders the Recipe list', () => {

  })

  it('has an add recipe function that adds recipe to list', () => {

  })

  it('an added recipe can have details', () => {

  })

})

