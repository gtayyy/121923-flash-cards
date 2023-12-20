import React from "react";
import PropTypes from "prop-types";

function ReusableCardForm(props){
  return (
    <React.Fragment>
			<h3>Create a New Flashcard.</h3>
			<form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='prompt'
          placeholder='Question / Hint' />
        <input
          type='text'
          name='answer'
          placeholder='Answer / Solution' />
        <button type='submit'>{props.buttonText}</button>
      </form> 
    </React.Fragment>
  );
}

ReusableCardForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
};

export default ReusableCardForm;