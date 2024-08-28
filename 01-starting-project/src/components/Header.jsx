import React from "react";
import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <>
      <header id="header">
        <img src={investmentCalculatorLogo} alt="investment calculator logo" />
        <h1>React Investment Calculator</h1>
      </header>
    </>
  );
};

export default Header;

