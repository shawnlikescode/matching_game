import { useState } from "react";
import Board from "./components/Board";
import { nanoid } from "nanoid";
import { createBoard } from "./functions/gameFunctions";

function App() {
	const cards = createBoard();
	return (
		<div className="App h-screen">
			<Board cards={cards} />
		</div>
	);
}

export default App;
