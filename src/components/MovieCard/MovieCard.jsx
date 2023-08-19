import React from "react";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <Card className="card movie-card">
      <Card.Img
        variant="top"
        src="http://via.placeholder.com/230x200
"
      />
      <Card.Body>
        <div className="flex-align-center card-title">
          <span>hiiiii</span>
          <span>4.5</span>
        </div>
        <div className="flex-align-center card-description">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elitctetur
            adipisicing elit.
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
