import React from 'react';
import ReusableCardForm from './ReusableCardForm';
import PropTypes from 'prop-types';

function EditCard(props) {
	const { card } = props;

	function handleEditCardSubmission(e) {
		e.preventDefault();
		props.onEditCard({ prompt: e.target.prompt.value, answer: e.target.answer.value, id: card.id });
	}

	return (
		<React.Fragment>
			<ReusableCardForm
				formSubmissionHandler={handleEditCardSubmission}
				buttonText="Update Flashcard" />
		</React.Fragment>
	);
}

EditCard.propTypes = {
	card: PropTypes.object,
	onEditCard: PropTypes.func
};

export default EditCard;