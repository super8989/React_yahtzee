import React, { Component } from "react";
import RuleRow from "./RuleRow";

class ScoreTable extends Component {
	render() {
		return (
			<div>
				<section>
					<h2>Upper</h2>
					<table>
						<tbody>
							<RuleRow />
						</tbody>
					</table>
				</section>

				<section>
					<h2>Lower</h2>
					<table>
						<tbody>
							<RuleRow />
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
