import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { push, goBack } from "react-router-redux";

class SeniorUser extends React.Component {
	constructor (props) {
		super (props);
		this.goBack = this.goBack.bind(this);
	}
	componentWillMount () {
		if(this.props.user.age === "" || this.props.user.age === null){
			this.props.dispatch(push("/"));
		}
	}
	goBack () {
		this.props.dispatch(goBack());
	}
	render() {
		var courses = ["B.Sc." , "B.Com.", "B.Tech.", "MBBS", "B.A."];
		var courseList = courses.map((course,idx) => {
			return (
				<li key={idx}> {course} </li>
			);
		});

		return (
			<div>
				<h2> Hello {this.props.user.name}. Your age is over 18 years. You can choose any of the following courses.</h2>
				<ul>
					{courseList}	
				</ul>
				<button className="btn btn-default" onClick={this.goBack}>Back</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.userdata
});

export default connect(mapStateToProps,null)(SeniorUser);

