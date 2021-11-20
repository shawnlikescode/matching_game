import React, { useState, useEffect } from "react";

const Stopwatch = () => {
	const [active, setActive] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;

		if (active) {
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

	return (
		<div className="stopwatch">
			<div className="numbers">
				<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
			</div>
			<div className="buttons">
				<button onClick={handleStop}>Reset</button>
			</div>
		</div>
	);
};

export default Stopwatch;
