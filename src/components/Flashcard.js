import React from "react";
import PropTypes from "prop-types";

function Flashcard(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenFlashcardClicked(props.id)}>
				<h3>{props.prompt}</h3>
				<h3>{props.answer}</h3>
        <hr/>
        </div>
    </React.Fragment>
  );
}

Flashcard.propTypes = {
  answer: PropTypes.string,
  prompt: PropTypes.string,
  id: PropTypes.string,
  whenFlashcardClicked: PropTypes.func
}

export default Flashcard;