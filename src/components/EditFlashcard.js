import React from 'react';
import ReusableFlashcardForm from './ReusableFlashCardForm';
import PropTypes from 'prop-types';

function EditFlashcard(props) {
	const { flashcard } = props;

	function handleEditFlashcardSubmission(e) {
		e.preventDefault();
		props.onEditFlashcard({ prompt: e.target.prompt.value, answer: e.target.answer.value, id: flashcard.id });
	}

	return (
		<React.Fragment>
			<ReusableFlashcardForm
				formSubmissionHandler={handleEditFlashcardSubmission}
				buttonText="Update Flashcard" />
		</React.Fragment>
	);
}

EditFlashcard.propTypes = {
	flashcard: PropTypes.object,
	onEditFlashcard: PropTypes.func
};

export default EditFlashcard;