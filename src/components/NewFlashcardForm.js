import React from "react";
import PropTypes from 'prop-types';
import ReusableFlashcardForm from "./ReusableFlashCardForm";

function NewFlashcardForm(props) {
	function handleNewFlashcardFormSubmission(e) {
		e.preventDefault();
		props.onNewFlashcardCreation({
			prompt: e.target.prompt.value,
			answer: e.target.answer.value,
		});
	}
	return (
		<React.Fragment>
			<ReusableFlashcardForm
				formSubmissionHandler={handleNewFlashcardFormSubmission}
				buttonText="Create Flashcard" />
		</React.Fragment>
	);
}

NewFlashcardForm.propTypes = {
	onNewFlashcardCreation: PropTypes.func
};

export default NewFlashcardForm;