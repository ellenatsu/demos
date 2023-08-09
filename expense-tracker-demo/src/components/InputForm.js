import React, { useState } from "react";

export const InputForm = (props) => {
  const initalFormData = {
    date: new Date().toISOString().slice(0, 10),
    payee: "t",
    amount: 0,
    category: "grocery",
  };
  const [formData, setFormData] = useState(initalFormData);

  // Event handler for input elementss
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  const resetHandler = () => {
    setFormData(initalFormData);
  };

  // Set the default value of the date input to the current date
  //document.getElementById("duration").value = currentDate;

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="grocery">Grocery</option>
            <option value="food">Food</option>
            <option value="activity">Activity</option>
            <option value="pet">Pet</option>
          </select>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="payee">Payee</label>
          <select
            id="payee"
            name="payee"
            value={formData.payee}
            onChange={handleInputChange}
          >
            <option value="t">Thor</option>
            <option value="e">Ellen</option>
          </select>
        </p>
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
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
