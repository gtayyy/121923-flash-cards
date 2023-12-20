import React, { useEffect, useState } from "react";
import NewCardForm from "./NewCardForm";
// import FlashcardList ?? 
import EditCard from "./EditCard";
import CardDetail from "./CardDetail";
import CardList from "./CardList.js";
import { db } from './../firebase.js'; 
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

function CardControl() {
	const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
	const [mainCardList, setMainCardList] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);
	const [editing, setEditing] = useState(false);

	const [error, setError] = useState(null);

	useEffect(() => {
		const unSubscribe = onSnapshot(
			collection(db, "cards"),
			(collectionSnapshot) => {
				const cards = [];
				collectionSnapshot.forEach((doc) => {
					cards.push({
						prompt: doc.data().prompt,
						answer: doc.data().answer,
						id: doc.id
					});
				});
				setMainCardList(cards);
			},
			(error) => {
				setError(error.message)
			}
		);	
		return () => unSubscribe();
	}, []);

	const handleClick = () => { 
		if (selectedCard != null) {
			setFormVisibleOnPage(false);
			setSelectedCard(null);
			setEditing(false);
		} else {
			setFormVisibleOnPage(!formVisibleOnPage);
		}
	}

	const handleDeletingCard = async (id) => {
		await deleteDoc(doc(db, "cards", id));
		setSelectedCard(null);
	}

	const handleEditClick = () => {
		setEditing(true);
	}

	const handleEditingCardInList = async (cardToEdit) => {
		const cardRef = doc(db, "cards", cardToEdit.id);
		await updateDoc(cardRef, cardToEdit);
		setEditing(false);
		setSelectedCard(null);
	}

	const handleAddingNewCardToList = async (newCardData) => {
		const collectionRef = collection(db, "cards");
		await addDoc(collectionRef, newCardData);
		setFormVisibleOnPage(false);
	}

	const handleChangingSelectedCard = (id) => {
		const selection = mainCardList.filter(card => card.id === id)[0];
		setSelectedCard(selection);
	}

	let currentlyVisibleState = null;
	let buttonText = null;

	if (error) {
		currentlyVisibleState = 
			<p>There was an error: {error}</p>
	} else if (editing) {
		currentlyVisibleState =
			<EditCard
				card={selectedCard}
				onEditCard={handleEditingCardInList} />;
		buttonText = "Return to Flashcard List";
	} else if (selectedCard != null) {
		currentlyVisibleState =
			<CardDetail
				card={selectedCard}
				onClickingDelete={handleDeletingCard}
				onClickingEdit={handleEditClick} />;
		buttonText = "Return to Flashcard List";
	} else if (formVisibleOnPage) {
		currentlyVisibleState =
			<NewCardForm
				onNewCardCreation={handleAddingNewCardToList} />;
		buttonText = "Return to Flashcard List";
	} else {
		currentlyVisibleState =
			<CardList
				onCardSelection={handleChangingSelectedCard}
				cards={mainCardList} />;
		buttonText = "Add Flashcard"
	}

	return (
		<React.Fragment>
			{currentlyVisibleState}
			{error ? null : <button onClick={handleClick}>{buttonText}</button>}
		</React.Fragment>
	);
}

export default CardControl;