import React from "react";
import "./Header.css";
import HomeLogo from "./../../assets/icons/home.svg";
import BackLogo from "./../../assets/icons/arrow_back.svg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import {
  clearSearchMovieList,
  searchMovie,
} from "../../app/features/movie/movieSlice";

const Header = ({ isDescPage, setSelectedMovieData }) => {
  const dispatch = useDispatch();

  const findMovie = debounce((key) => {
    if (!key) return dispatch(clearSearchMovieList());
    dispatch(searchMovie({ key }));
  }, 500);

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
        <input
          className="search"
          type="search"
          placeholder="Search"
          onChange={(e) => findMovie(e.target.value)}
          onEmptied={() => dispatch(clearSearchMovieList())}
        />
      )}
      <img
        className="logo"
        src={HomeLogo}
        alt="home Logo"
        onClick={() => setSelectedMovieData(null)}
      />
    </header>
  );
};

export default Header;
