import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../CSS/Card.css";


function Card(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className={`card-inner ${showAnswer ? "flipped" : ""}`}>
        <div className="card-front">
          <h3>{props.prompt}</h3>
        </div>
        <div className="card-back">
          <h3>{props.answer}</h3>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  answer: PropTypes.string,
  prompt: PropTypes.string,
  id: PropTypes.string,
};

export default Card;