import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function CardList({ cards, onCardSelection, selectedCardId }) {
  console.log("CardList Rendering with Cards:", cards);

  const selectedCard = cards.find((card) => card.id === selectedCardId);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          prompt={card.prompt}
          answer={card.answer}
          whenCardSelection={() => onCardSelection(card.id)}
          isSelected={card.id === selectedCardId}
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
  onCardSelection: PropTypes.func,
  selectedCardId: PropTypes.string,
};

export default CardList;