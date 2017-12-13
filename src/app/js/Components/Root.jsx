import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {push, goBack, go} from 'react-router-redux';
import { ProgressBar } from "react-bootstrap";

class Root extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<h1>Course Selector</h1>
				{this.props.children}
			</div>
		);		
	}
}