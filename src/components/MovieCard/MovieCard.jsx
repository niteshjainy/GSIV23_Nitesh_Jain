import React from "react";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";
import { imageBaseUrl } from "../../api.config";

const MovieCard = ({ movie }) => {
  return (
    <Card className="card movie-card">
      <Card.Img
        variant="top"
        className="movie-img-card"
        loading="lazy"
        src={`${imageBaseUrl}${movie?.poster_path}`}
      />
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
    </Card>
  );
};

export default MovieCard;
