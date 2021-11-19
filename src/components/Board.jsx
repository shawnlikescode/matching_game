import React, { useState, useEffect } from 'react';

const Board = props => {
    const [cards, setCards] = useState([]);

    // useEffect is a hook that runs after the component mounts
    useEffect(() => {
        createBoard();
    }, []);

    // createBoard() creates a board of cards
    const createBoard = () => {
        const board = [];
        for (let i = 0; i < 16 / 2; i++) {
            board.push(i);
            board.push(i);
        }
        setCards([...shuffle(board)]);
    }


    const shuffle = (cardPool) => {
        for (let i = cardPool.length - 1; i >= 0; i--) {
            let x = Math.floor(Math.random() * i + 1);
            [cardPool[i], cardPool[x]] = [cardPool[x], cardPool[i]];
        }
        return cardPool
    }

    // return the board
    return (
        <div>
            {cards.map((card, i) => {
                return <div>{card}</div>
            })
            }
        </div>
    )
}
export default Board;