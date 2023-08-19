import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="container-fluid ">
      <input className="search" type="search" placeholder="Search" />
      <span className="material-symbols-outlined">home</span>
    </header>
  );
};

export default Header;
