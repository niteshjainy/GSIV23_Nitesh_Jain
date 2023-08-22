import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { filterForUpcomingMovie } from "./utills/globalFunction";
import { fetchMovies } from "./app/features/movie/movieSlice";

function App() {
  const dispatch = useDispatch();
  const { movieList, searchedMovieList } = useSelector((state) => state.movie);
  const [selectedMovieData, setSelectedMovieData] = useState(null);
  const [page, setPage] = useState(1);
  const activeState = searchedMovieList?.length
    ? searchedMovieList
    : filterForUpcomingMovie(movieList, "release_date");

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page]);

  return (
    <main className="container-fluid">
      <Header
        isDescPage={selectedMovieData ? true : false}
        setSelectedMovieData={setSelectedMovieData}
      />
      <div className="movie-container">
        {selectedMovieData ? (
          <MovieCard
            detailView={true}
            key={selectedMovieData.id}
            movie={selectedMovieData}
          />
        ) : activeState?.length ? (
          activeState.map((item) => (
            <MovieCard
              key={item.id}
              movie={item}
              setSelectedMovieData={setSelectedMovieData}
            />
          ))
        ) : null}
      </div>
    </main>
  );
}

export default App;
