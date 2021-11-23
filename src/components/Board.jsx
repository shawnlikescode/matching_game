import React, { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";

const Board = (props) => {
	const [cards, setCards] = useState([]);
	const [openCard, setOpenCards] = useState([]);
	const [moves, setMoves] = useState(0);

	// useEffect is a hook that runs after the component mounts
	useEffect(() => {
		createBoard();
	}, []);

	// createBoard() creates a board of cards
	const createBoard = () => {
		const board = [];
		for (let i = 0; i < 16 / 2; i++) {
			const card = {
				value: i,
				opened: false,
				matched: false,
			};
			board.push(card);
			board.push(card);
		}
		setCards([...shuffle(board)]);
	};

	const shuffle = (cardPool) => {
		// fisher-yates shuffle
		let index = cardPool.length,
			random;
		while (--index > 0) {
			random = Math.floor(Math.random() * index);
			[cardPool[index], cardPool[random]] = [cardPool[random], cardPool[index]];
		}
		return cardPool;
	};

	const cardFlip = (event) => {
		setOpenCards((openCards) => [...openCards, event.target.value]);
	};

	// return the board
	return (
		<div className="h-full grid place-content-center">
			<Stopwatch styles="mx-auto w-1/3 flex flex-1 justify-between font-bold" moves={moves} />
			<div className="w-1/2 mx-auto flex flex-wrap justify-center">
				{cards.map((card, i) => {
					return (
						<div className="w-40 h-40 m-5 text-center bg-gray-300 grid place-content-center rounded">
							<span className="text-4xl">{card.value}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Board;
