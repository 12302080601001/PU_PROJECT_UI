import React, { useState } from 'react';

function Forms() {
  const [foodItem, setFoodItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Food Item: ${foodItem}`);
  };

  return (
    <div className="forms">
      <h2>Food Donation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="foodItem">Food Item:</label>
        <input
          type="text"
          id="foodItem"
          name="foodItem"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
        <button type="submit">Donate Food</button>
      </form>
    </div>
  );
}

export default Forms;
