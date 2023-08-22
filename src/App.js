import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "./app/features/movie/movieSlice";

function App() {
  const dispatch = useDispatch();
  const elementRef = useRef(null);
  const { movieList, searchedMovieList, hasMore } = useSelector(
    (state) => state.movie
  );
  const [selectedMovieData, setSelectedMovieData] = useState(null);
  // this state is representing current state either filter or normal
  const activeState = searchedMovieList?.length ? searchedMovieList : movieList;

  // function for calling fetch api
  const fetchNewData = (entries) => {
    if (entries[0].isIntersecting && hasMore) {
      dispatch(fetchMovies());
    }
  };

  // IntersectionObserver is used for tracking view and fetching data
  useEffect(() => {
    const observer = new IntersectionObserver(fetchNewData);

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [elementRef]);

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
        {hasMore && <div ref={elementRef}></div>}
      </div>
    </main>
  );
}

export default App;
