import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { useState } from "react";
import { filterForUpcomingMovie } from "./utills/globalFunction";

function App() {
  const [selectedMovieData, setSelectedMovieData] = useState(null);
  const { movieList, searchedMovieList } = useSelector((state) => state.movie);
  const activeState = searchedMovieList?.length
    ? searchedMovieList
    : filterForUpcomingMovie(movieList, "release_date");
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
