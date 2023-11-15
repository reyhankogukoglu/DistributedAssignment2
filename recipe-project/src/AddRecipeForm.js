// AddRecipeForm.js
import React from 'react';
import './AddRecipeForm.css'; // You can create a separate CSS file for styling

const AddRecipeForm = ({ isVisible, onClose }) => {
  return (
    <div className={`add-recipe-form. ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Your form content goes here */}
      <h2>Add Recipe</h2>
      {/* Add your form fields and logic here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddRecipeForm;
