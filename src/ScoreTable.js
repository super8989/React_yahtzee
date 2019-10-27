import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";

class ScoreTable extends Component {
	render() {
		return (
			<div className='ScoreTable'>
				<section className='ScoreTable-section'>
					<h2>Upper</h2>
					<table cellSpacing='0'>
						<tbody>
							<RuleRow name='Ones' />
							<RuleRow name='Twos' />
							<RuleRow name='Threes' />
							<RuleRow name='Fours' />
							<RuleRow name='Fives' />
							<RuleRow name='Sixes' />
						</tbody>
					</table>
				</section>

				<section className='ScoreTable-section ScoreTable-section-lower'>
					<h2>Lower</h2>
					<table cellSpacing='0'>
						<tbody>
							<RuleRow name='Three of Kind' />
							<RuleRow name='Four of Kind' />
							<RuleRow name='Full House' />
							<RuleRow name='Small Straight' />
							<RuleRow name='Large Straight' />
							<RuleRow name='Yahtzee' />
							<RuleRow name='Chance' />
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
