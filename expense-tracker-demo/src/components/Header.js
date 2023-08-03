import logo from "../assets/investment-calculator-logo.png";
import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Budget Tracker</h1>
    </header>
  );
};
