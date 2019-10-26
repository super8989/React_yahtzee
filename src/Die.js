import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
	render() {
		return (
			<button
				className={"Die"}
				style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
				onClick={this.props.handleClick}
			>
				Die
			</button>
		);
	}
}

export default Die;
