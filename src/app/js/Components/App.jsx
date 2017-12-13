import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { connect } from "react-redux";
import { goBack } from "react-router-redux";

import store from "../store";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/index.css";

const history = syncHistoryWithStore(browserHistory, store);

import UserInfo from "./UserInfo";
import JuniorUser from "./JuniorUser";
import SeniorUser from "./SeniorUser";
import ResourceNotFound from "./ResourceNotFound";

class App extends React.Component {
	componentWillMount () {
		
	}
	render() {
		return (
			<div className="container">
				<h1>Course Selector</h1>
				<Router history={history}>
					<Route path={"/"} component={UserInfo} />
					<Route path={"/junior"} component={JuniorUser} />
					<Route path={"/senior"} component={SeniorUser} />
					<Route path="*" component={ResourceNotFound} />
				</Router>
				{this.props.children}
				<hr />
				<div className="footer">
					<span> ©All Rights reserved </span>
				</div>
			</div>
		);
	}
}

export default App;