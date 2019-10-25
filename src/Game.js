import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";

class Game extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>Yahtzee</h1>

					<section>
						<Dice />
						<div>
							<button>Rolls left</button>
						</div>
					</section>
				</header>

				<ScoreTable />
			</div>
		);
	}
}

export default Game;
