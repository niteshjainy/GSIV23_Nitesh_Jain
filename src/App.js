import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "./app/features/movie/movieSlice";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const elementRef = useRef(null);
  const {
    movieList,
    searchedMovieList,
    hasMore,
    isLoading = true,
  } = useSelector((state) => state.movie);
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

  // storing scroll position
  function saveScrollPos() {
    const scrollPos = { x: window.scrollX, y: window.scrollY };
    sessionStorage.setItem("homePageScroll", JSON.stringify(scrollPos));
  }

  // scrolling back when closing detail page
  useEffect(() => {
    const scrollPos = JSON.parse(sessionStorage.getItem("homePageScroll"));
    if (scrollPos) {
      window.scrollTo(scrollPos.x, scrollPos.y);
    }
  }, [selectedMovieData]);

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
              saveScrollPos={saveScrollPos}
            />
          ))
        ) : null}
        {hasMore && <div ref={elementRef}></div>}
      </div>
      {isLoading && <Loader />}
    </main>
  );
}

export default App;
