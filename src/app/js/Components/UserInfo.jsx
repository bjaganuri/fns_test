import React from "react";
import { Control, Form, actions, Errors } from "react-redux-form";
import { push } from "react-router-redux";
import { connect } from "react-redux";

class UserInfo extends React.Component {
	constructor (props) {
		super (props);
		this.submitUserData  = this.submitUserData.bind(this);
	}
	submitUserData (data){
		if(data.age > 18){
			this.props.dispatch(push("senior"));
		}
		else {
			this.props.dispatch(push("junior"));
		}
	}
	render() {
		const required = val => val && val.length;
		return (
			<div>
				<h2> Please provide the following details to see the choices: </h2>
				<Form model="userdata" hideNativeErrors onSubmit={this.submitUserData} className="form-horizontal">					
					<div className="field form-group">
						<label className="col-lg-2 col-md-6 col-sm-12"> Your Name : </label>
						<div className="col-lg-4 col-md-6 col-sm-12 has-feedback">
							<Control.text
								model=".name"
								id=".name"
								placeholder="Your Name"
								className="form-control"
								validators={{
									required
								}}
								validateOn="blur"
							/>
							<Errors
								className="errors text-danger"
								model=".name"
								show="touched"
								messages={{
									required: "Name is required"
								}}
							/>
						</div>
					</div>
					<div className="field form-group">
						<label className="col-lg-2 col-md-6 col-sm-12"> Your Age :  </label>
						<div className="col-lg-4 col-md-6 col-sm-12 has-feedback">
							<Control.text
								model=".age"
								id=".age"
								placeholder="Your Age"
								className="form-control"
								validators={{
									required,
									validAge: val => /^\d*$/.test(val)
								}}
								validateOn="blur"
							/>
							<Errors
								className="errors text-danger"
								model=".age"
								show="touched"
								messages={{
									required: "Age is required",
									validAge: "Age can only be number"
								}}
							/>
						</div>
					</div>
					<div className="field form-group">
						<div className="col-lg-12 col-md-12 col-sm-12 has-feedback">
							<button type="submit" className="btn btn-default">Submit</button>
						</div>
					</div>
				</Form>
			</div>
		);
	}
}

export default connect(null,null)(UserInfo);
