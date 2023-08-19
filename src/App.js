import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  return (
    <main className="container-fluid">
      <Header />
      <div className="movie-container">
        {Array.from(Array(100), (_, index) => index + 1).map((e) => (
          <MovieCard />
        ))}
      </div>
    </main>
  );
}

export default App;
