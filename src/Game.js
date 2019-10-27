import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice: Array.from({ length: NUM_DICE }),
			locked: Array(NUM_DICE).fill(false)
		};
	}

	toggleLocked(idx) {
		//toggle whether idx is locked or not
		this.setState(st => ({
			locked: [
				...st.locked.sliced(0, idx),
				!st.locked[idx],
				...st.locked.sliced(idx + 1)
			]
		}));
	}

	render() {
		return (
			<div className='Game'>
				<header className='Game-header'>
					<h1 className='App-title'>Yahtzee</h1>

					<section className='Game-dice-section'>
						<Dice
							dice={this.state.dice}
							locked={this.state.locked}
							handleClick={this.toggleLocked}
						/>

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
