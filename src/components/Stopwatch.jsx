import React, { useState, useEffect } from "react";

const Stopwatch = ({ styles, moves }) => {
	const [active, setActive] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;

		if (!active) {
			interval = setInterval(() => {
				setTime((t) => t + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [active]);

	const handleStop = () => {
		setActive(false);
		setTime(0);
	};

	const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
	const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
	const ms = ("0" + ((time / 10) % 100)).slice(-2);

	return (
		<div className={styles}>
			<div className="w-20">
				<span className="text-lg">{`${minutes}:${seconds}:${ms}`}</span>
			</div>
			<div className="w-20 text-lg text-center">{`Moves: ${moves}`}</div>
			<div className="w-20">
				<button
					className="bg-red-500 rounded p-2 max-w-max shadow-md font-bold text-white"
					onClick={handleStop}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Stopwatch;
