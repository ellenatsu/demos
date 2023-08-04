import React, { useState } from "react";

export const InputForm = () => {
  const [selectCategory, setSelectCategory] = useState("grocery");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const resetHandler = () => {};

  const inputChangeHandler = (input, value) => {};
  const categoryChangeHandler = (event) => {
    setSelectCategory(event.target.value);
  };

  const [formData, setFormData] = useState({
    date: "",
    text: "",
    amount: "",
  });

  // Event handler for input elements
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Get the current date in the format YYYY-MM-DD
  const currentDate = new Date().toISOString().slice(0, 10);

  // Set the default value of the date input to the current date
  //document.getElementById("duration").value = currentDate;

  return (
    <form className="form" onClick={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="date">Date</label>
          <input
            onChange={handleInputChange}
            type="date"
            id="date"
            value={formData.date}
          />
        </p>
        <p>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={selectCategory}
            onChange={categoryChangeHandler}
          >
            <option value="grocery">Grocery</option>
            <option value="food">Food</option>
            <option value="pet">Pet</option>
          </select>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="payee">Payee</label>
          <select id="payee">
            <option value="t" selected>
              Thor
            </option>
            <option value="e">Ellen</option>
          </select>
        </p>
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Add
        </button>
      </p>
    </form>
  );
};
