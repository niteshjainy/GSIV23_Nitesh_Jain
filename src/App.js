import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { useState } from "react";

function App() {
  const [selectedMovieData, setSelectedMovieData] = useState(null);
  const movieList = useSelector((state) => state.movie.movieList);

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
        ) : movieList?.length ? (
          movieList.map((item) => (
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
