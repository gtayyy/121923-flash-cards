import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../CSS/Card.css";

function Card(props) {
  const [showAnswer, setShowAnser] = useState(false);

  const handleCardClick = () => {
    setShowAnser(!showAnswer);
  };

  return (
    <div className="card" onClick={() => props.whenCardSelected(props.id)}>
      <div className={`card-inner ${showAnswer ? "flipped" : ""}`} onClick={handleCardClick}>
        <div className="card-front">
          <h3>{props.prompt}</h3>
          </div>
          <div className="card=back">
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
  whenCardSelected: PropTypes.func
};

export default Card;