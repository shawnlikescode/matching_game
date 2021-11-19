import React, { useState } from "react";

const Timer = () => {
	const [active, SetActive] = useState(false);
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
	}, [isActive]);

	const handleStart = () => {
		setIsActive(true);
	};

	const handleStop = () => {
		setIsActive(false);
		setTime(0);
	};

	return (
		<>
			<h5>{time}</h5>
		</>
	);
};
