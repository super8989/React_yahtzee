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
							<RuleRow />
							<RuleRow />
							<RuleRow />
							<RuleRow />
							<RuleRow />
							<RuleRow />
						</tbody>
					</table>
				</section>

				<section className='ScoreTable-section ScoreTable-section-lower'>
					<h2>Lower</h2>
					<table cellSpacing='0'>
						<tbody>
							<RuleRow />
							<RuleRow />
							<RuleRow />
							<RuleRow />
							<RuleRow />
							<RuleRow />
							<RuleRow />
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
