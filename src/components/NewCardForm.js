import React from "react";
import PropTypes from 'prop-types';
import ReusableCardForm from "./ReusableCardForm";

function NewCardForm(props) {
	function handleNewCardFormSubmission(e) {
		e.preventDefault();
		props.onNewCardCreation({
			prompt: e.target.prompt.value,
			answer: e.target.answer.value,
		});
	}
	return (
		<React.Fragment>
			<ReusableCardForm
				formSubmissionHandler={handleNewCardFormSubmission}
				buttonText="Create Flashcard" />
		</React.Fragment>
	);
}

NewCardForm.propTypes = {
	onNewCardCreation: PropTypes.func
};

export default NewCardForm;