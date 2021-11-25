import React, { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";
import { nanoid } from "nanoid";
import Card from "./Card";
import { validateGuesses, guessesFull, resetGuessesAfter, cardInGuesses } from "../functions/gameFunctions";

const Board = (props) => {
	const [cards, setCards] = useState(props.cards);
	const [openCards, setOpenCards] = useState([]);
	const [guesses, setGuesses] = useState([]);
	const [moves, setMoves] = useState(0);

	const onCardClick = (card) => () => {
		if (guessesFull(guesses) || cardInGuesses(guesses, card)) return;

		const newGuesses = [...guesses, card];

		setGuesses(newGuesses);

		const guessesMatched = validateGuesses(newGuesses);

		if (guessesMatched) {
			setOpenCards([...openCards, newGuesses[0].value]);
		}

		if (guessesFull(newGuesses)) {
			resetGuessesAfter(1000, setGuesses);
		}
	};

	// useEffect is a hook that runs after the component mounts
	useEffect(() => {
		const newCards = cards.map((card) => ({
			...card,
			flipped: guesses.find((c) => c.id === card.id) || openCards.includes(card.value),
		}));
		setCards(newCards);
	}, [guesses, openCards]);

	// return the board
	return (
		<div className="h-full grid place-content-center">
			<Stopwatch styles="mx-auto w-1/3 flex flex-1 justify-between font-bold" moves={moves} />
			<div className="w-1/2 mx-auto flex flex-wrap justify-center">
				{cards.map((card) => (
					<Card {...card} onClick={onCardClick(card)} key={nanoid()} />
				))}
			</div>
		</div>
	);
};
export default Board;
