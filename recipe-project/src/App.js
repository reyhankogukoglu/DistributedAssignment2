import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import FloatingButton from './FloatingButton'
import AddRecipeForm from './AddRecipeForm';
import React, { useState } from 'react';

function App() {
  // Example data (replace with your actual recipe data)
  const recipeData = {
    title: 'Delicious Dish',
    description: 'A tasty dish for any occasion.',
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    instructions: 'Cook it, and enjoy!',
  };
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  
  const handleCloseForm = () => {
    setAddFormVisible(false);
  };

  const handleAddClick = () => {
    setAddFormVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <Recipe {...recipeData}></Recipe>
        <FloatingButton onClick={handleAddClick}></FloatingButton>
        {isAddFormVisible && <AddRecipeForm onClose={handleCloseForm} />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
