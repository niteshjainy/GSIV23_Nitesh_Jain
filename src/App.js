import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { useEffect } from "react";
import { setMovieList } from "./app/features/movie/movieSlice";

function App() {
  const movieList = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch();

  return (
    <main className="container-fluid">
      <Header />
      <div className="movie-container">
        {movieList?.length &&
          movieList.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </main>
  );
}

export default App;
