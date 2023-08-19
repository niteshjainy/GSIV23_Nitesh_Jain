import React from "react";
import "./Header.css";
import HomeLogo from "./../../assets/icons/home.svg";
import BackLogo from "./../../assets/icons/arrow_back.svg";
const Header = ({ isDescPage, setSelectedMovieData }) => {
  return (
    <header className="container-fluid ">
      {isDescPage ? (
        <div className="flex-align-start">
          <img
            className="logo"
            src={BackLogo}
            alt="React Logo"
            onClick={() => setSelectedMovieData(null)}
          />
          <span className="title">Movie Details</span>
        </div>
      ) : (
        <input className="search" type="search" placeholder="Search" />
      )}
      <img className="logo" src={HomeLogo} alt="home Logo" />
    </header>
  );
};

export default Header;
