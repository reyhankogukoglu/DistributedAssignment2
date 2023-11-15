// Recipe.js
import React from 'react';
import './Recipe.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

const Recipe = ({ title, description, ingredients, instructions }) => {
  const handleDelete = () => {
    // Implement your delete logic here
    console.log('Recipe deleted!');
  };

  const handleEdit = () => {
    // Implement your edit logic here
    console.log('Editing recipe...');
  };

  return (
    <div className="recipe">
      <div className="recipe-header">
        <h2>{title}</h2>
        <div className="buttons">
        <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
        </div>
      </div>
      <p>{description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{instructions}</p>
    </div>
  );
};

export default Recipe;
