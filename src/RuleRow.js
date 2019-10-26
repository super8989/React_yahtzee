import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
	render() {
		return (
			<tr className='RuleRow RuleRow-active'>
				<td className='RuleRow-name'>Name</td>
				<td className='RuleRow-score'>Score</td>
			</tr>
		);
	}
}

export default RuleRow;
