import React from "react";
import PropTypes from "prop-types";

function FlashcardDetail(props) {
  const { flashcard, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Flashcard Detail</h1>
      <h3>{flashcard.prompt}</h3>
      <h3>{flashcard.answer}</h3>
      <button onClick={onClickingEdit}>Update Flashcard</button>
      <button onClick={() => onClickingDelete(flashcard.id)}>Delete Flashcard</button>
      <hr />
    </React.Fragment>
  );
}

FlashcardDetail.PropTypes = {
  flashcard: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default FlashcardDetail;