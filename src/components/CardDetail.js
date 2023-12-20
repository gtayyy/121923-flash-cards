import React from "react";
import PropTypes from "prop-types";

function CardDetail(props) {
  const { card, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Flashcard Detail</h1>
      <h3>{card.prompt}</h3>
      <h3>{card.answer}</h3>
      <button onClick={onClickingEdit}>Update Flashcard</button>
      <button onClick={() => onClickingDelete(card.id)}>Delete Flashcard</button>
      <hr />
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  flashcard: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CardDetail;