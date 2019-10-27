import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance
} from "./Rules";

class ScoreTable extends Component {
	render() {
		const { scores } = this.props;

		return (
			<div className='ScoreTable'>
				<section className='ScoreTable-section'>
					<h2>Upper</h2>
					<table cellSpacing='0'>
						<tbody>
							<RuleRow name='Ones' score={scores.ones} />
							<RuleRow name='Twos' score={scores.twos} />
							<RuleRow name='Threes' score={scores.threes} />
							<RuleRow name='Fours' score={scores.fours} />
							<RuleRow name='Fives' score={scores.fives} />
							<RuleRow name='Sixes' score={scores.sixes} />
						</tbody>
					</table>
				</section>

				<section className='ScoreTable-section ScoreTable-section-lower'>
					<h2>Lower</h2>
					<table cellSpacing='0'>
						<tbody>
							<RuleRow name='Three of Kind' score={scores.threeOfKind} />
							<RuleRow name='Four of Kind' score={scores.fourOfKind} />
							<RuleRow name='Full House' score={scores.fullHouse} />
							<RuleRow name='Small Straight' score={scores.smallStraight} />
							<RuleRow name='Large Straight' score={scores.largeStraight} />
							<RuleRow name='Yahtzee' score={scores.yahtzee} />
							<RuleRow name='Chance' score={scores.chance} />
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
