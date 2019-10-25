import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

class Game extends Component {
	render() {
		return (
			<div className='Game'>
				<header className='Game-header'>
					<h1 className='App-title'>Yahtzee</h1>

					<section className='Game-dice-section'>
						<Dice />

						<div className='Game-button-wrapper'>
							<button className='Game-reroll'>Rolls left</button>
						</div>
					</section>
				</header>

				<ScoreTable />
			</div>
		);
	}
}

export default Game;
