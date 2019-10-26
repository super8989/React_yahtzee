import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
	render() {
		return (
			<div className='Dice'>
				<Die />
			</div>
		);
	}
}

export default Dice;
