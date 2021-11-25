import { nanoid } from "nanoid";

export function validateGuesses(guesses) {
	return guesses.length === 2 && guesses[0].value === guesses[1].value;
}
export function cardInGuesses(guesses, card) {
	return guesses.length === 1 && guesses[0].id === card.id;
}
export function guessesFull(guesses) {
	return guesses.length === 2;
}
export function resetGuessesAfter(time, setGuesses) {
	setTimeout(() => {
		return setGuesses([]);
	}, time);
}

export function createBoard() {
	const cards = [];
	for (let i = 0; i < 16 / 2; i++) {
		const card = () => ({
			id: nanoid(),
			value: i,
			flipped: false,
			matched: false,
		});
		cards.push(card());
		cards.push(card());
	}
	return shuffle(cards);
}

export function shuffle(cardPool) {
	// fisher-yates shuffle
	let index = cardPool.length,
		random;
	while (--index > 0) {
		random = Math.floor(Math.random() * index);
		[cardPool[index], cardPool[random]] = [cardPool[random], cardPool[index]];
	}
	return cardPool;
}
