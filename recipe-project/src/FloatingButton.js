import React from 'react';
import './App.css';

const FloatingButton = ({ onClick }) => {
  const handleAdd = () => {
    // Add your logic here
    console.log('Adding something...');
    // If you want to also trigger the onClick prop, uncomment the line below
    onClick();
  };

  return (
    <div>
      {/* Your component content */}
      <div className="floating-button" onClick={handleAdd}>
        +
      </div>
    </div>
  );
};

export default FloatingButton;
