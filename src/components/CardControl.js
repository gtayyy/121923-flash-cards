// import React, { useEffect, useState } from "react";
// import NewCardForm from "./NewCardForm";
// import EditCard from "./EditCard";
// import CardDetail from "./CardDetail";
// import CardList from "./CardList";
// import { db } from './../firebase.js';
// import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

// function CardControl() {
// 	const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
// 	const [mainCardList, setMainCardList] = useState([]);
// 	const [selectedCardId, setSelectedCardId] = useState(null);
// 	const [editing, setEditing] = useState(false);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const unSubscribe = onSnapshot(
// 			collection(db, "cards"),
// 			(collectionSnapshot) => {
// 				const cards = [];
// 				collectionSnapshot.forEach((doc) => {
// 					cards.push({
// 						prompt: doc.data().prompt,
// 						answer: doc.data().answer,
// 						id: doc.id,
// 					});
// 				});
// 				setMainCardList(cards);

// 				if (cards.length > 0 && selectedCardId === null) {
// 					setSelectedCardId(cards[0].id);
// 				}
// 			},
// 			(error) => {
// 				setError(error.message);
// 			}
// 		);

// 		return () => unSubscribe();
// 	}, [mainCardList, selectedCardId]);


// const handleClick = () => {
// 	if (selectedCardId != null) {
// 		setFormVisibleOnPage(false);
// 		setSelectedCardId(null);
// 		setEditing(false);
// 	} else {
// 		setFormVisibleOnPage(!formVisibleOnPage);
// 	}
// }

// const handleDeletingCard = async (id) => {
// 	await deleteDoc(doc(db, "cards", id));
// 	setSelectedCardId(null);
// }

// const handleEditClick = () => {
// 	setEditing(true);
// }

// const handleEditingCardInList = async (cardToEdit) => {
// 	const cardRef = doc(db, "cards", cardToEdit.id);
// 	await updateDoc(cardRef, cardToEdit);
// 	setEditing(false);
// 	setSelectedCardId(null);
// }

// const handleAddingNewCardToList = async (newCardData) => {
// 	const collectionRef = collection(db, "cards");
// 	await addDoc(collectionRef, newCardData);
// 	setFormVisibleOnPage(false);
// }

// const handleChangingSelectedCard = (id) => {
// 	setSelectedCardId(id);
// }

// const handleDrawNextCard = () => {
// 	const availableCards = mainCardList.filter((card) => card.id !== selectedCardId);

// 	if (availableCards.length > 0) {
// 		const randomIndex = Math.floor(Math.random() * availableCards.length);
// 		setSelectedCardId(availableCards[randomIndex].id);
// 	} else {
// 		console.log("No available cards to draw");
// 	}
// };

// return (
// 	<React.Fragment>
// 		{selectedCardId ? (
// 			<div>
// 				{editing ? (
// 					<EditCard
// 						card={mainCardList.find((card) => card.id === selectedCardId)}
// 						onEditCard={handleEditingCardInList}
// 					/>
// 				) : (
// 					<CardDetail
// 						card={mainCardList.find((card) => card.id === selectedCardId)}
// 						onClickingDelete={() => handleDeletingCard(selectedCardId)}
// 						onClickingEdit={handleEditClick}
// 					/>
// 				)}
// 			</div>
// 		) : formVisibleOnPage ? (
// 			<NewCardForm onNewCardCreation={handleAddingNewCardToList} />
// 		) : (
// 			<CardList
// 				onCardSelection={handleChangingSelectedCard}
// 				cards={mainCardList}
// 				selectedCardId={selectedCardId}
// 			/>
// 		)}
// 		<button onClick={handleDrawNextCard}>Draw Next Card</button>
// 		{error ? null : <button onClick={handleClick}>Toggle Form</button>}
// 	</React.Fragment>
// );
// }

// export default CardControl;




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

	return (
		<React.Fragment>
			{selectedCard ? (
				<div>
					{editing ? (
						<EditCard card={selectedCard} onEditCard={handleEditingCardInList} />
					) : (
						<CardDetail
							card={selectedCard}
							onClickingDelete={() => handleDeletingCard(selectedCard.id)}
							onClickingEdit={handleEditClick}
						/>
					)}
				</div>
			) : formVisibleOnPage ? (
				<NewCardForm onNewCardCreation={handleAddingNewCardToList} />
			) : (
				<CardList
					onCardSelection={handleChangingSelectedCard}
					cards={mainCardList}
				/>
			)}
			{error ? null : <button onClick={handleClick}>Toggle Form</button>}
		</React.Fragment>
	);
}

export default CardControl;
