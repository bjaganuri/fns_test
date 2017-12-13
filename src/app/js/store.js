import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connect, Provider } from "react-redux";
import logger from "redux-logger";
import { combineForms, createForms } from "react-redux-form";
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import { UserData } from "./Reducers/UserData";

let middleware = applyMiddleware(routerMiddleware(browserHistory), logger);

if(process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, (window.devToolsExtension ? window.devToolsExtension() : compose));  
}

const store = createStore(
	combineReducers({
		...createForms({
			userdata: UserData
		}),
		routing: routerReducer
	}),
	{},
	middleware
);

export default store;