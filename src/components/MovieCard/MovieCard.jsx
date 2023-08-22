import React from "react";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";
import { imageBaseUrl } from "../../api.config";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../../app/features/movie/movieSlice";

const MovieCard = ({ movie, setSelectedMovieData, detailView }) => {
  const dispatch = useDispatch();
  const movieDescription = useSelector((state) => state.movie.movieDescription);

  return (
    <Card
      className={`card ${detailView ? "movie-desc-card" : "movie-card"}`}
      onClick={() => {
        if (!detailView) {
          setSelectedMovieData(movie);
          dispatch(fetchMovieById({ id: movie?.id }));
        }
      }}
    >
      <Card.Img
        variant="top"
        className={`${detailView ? "movie-img-desc-card" : "movie-img-card"}`}
        loading="lazy"
        alt={movieDescription?.title}
        src={`${imageBaseUrl}${movie?.poster_path}`}
      />
      {detailView ? (
        <Card.Body>
          <div className="flex-align-start card-title">
            <span className="title">{movieDescription?.title}</span>
            <span className="rating">
              ({movieDescription?.vote_average}/10)
            </span>
          </div>
          <div className="flex-align-start card-title">
            <span className="info">
              {movieDescription?.release_date + " |"}
            </span>
            <span className="info">
              {parseInt(movieDescription?.runtime / 60)} :{" "}
              {parseInt(movieDescription?.runtime % 60)
                .toString()
                .padStart(2, "0") + " |"}
            </span>
            <span className="info">{movieDescription?.title}</span>
          </div>
          <div className="card-desc-description">
            <span>{movieDescription?.overview}</span>
          </div>
        </Card.Body>
      ) : (
        <Card.Body>
          <div className="flex-align-center card-title">
            <span>
              {movie?.title.length > 20
                ? movie?.title?.substring(0, 22) + "..."
                : movie?.title}
            </span>
            <span>({movie?.vote_average}/10)</span>
          </div>
          <div className="flex-align-center card-description">
            <span>{movie?.overview?.substring(0, 70)}...</span>
          </div>
        </Card.Body>
      )}
    </Card>
  );
};

export default MovieCard;
