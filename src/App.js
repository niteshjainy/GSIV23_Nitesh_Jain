import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  const movieList = useSelector((state) => state.movie.movieList);

  return (
    <main className="container-fluid">
      <Header />
      <div className="movie-container">
        {movieList?.length &&
          movieList.map((item) => <MovieCard key={item.id} movie={item} />)}
      </div>
    </main>
  );
}

export default App;
