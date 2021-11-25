import { nanoid } from "nanoid";
import React from "react";

const Card = (props) => {
	const { value, flipped, matched, id, onClick } = props;
	console.log(value, flipped, matched, id);
	const face = flipped ? value : "";
	return (
		<div className="card" onClick={onClick}>
			{face}
		</div>
	);
};

export default Card;
