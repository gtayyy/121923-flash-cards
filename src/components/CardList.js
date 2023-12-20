import React from "react";
import PropTyples from "prop-types";
import Card from "./Card";

function CardList(props) {
  const { card, onCardClick } = props;

  return (
    <div className="card-list">
      {CardList.map((card) => (
        <Card
        key={card.id}
        id={card.id}
        prompt={card.prompt}
        answer={card.answer}
        whenCardClicked={onCardClick}
        />
      ))}
      </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      prompt: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
  onCardClick: PropTypes.func,
};

export default CardList;