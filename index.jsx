import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import FieldApp from './field/index.jsx';
import VideoApp from './video/index.jsx';
import Obserable from './assets/libs/obserable.js';
class App extends React.Component{
	constructor(args) {
		super(...args);
	}
	render() {
		var apps = [
				{path: '/', app:FieldApp },
				{path: '/video', app:VideoApp }
		];
		return (
			<Router history={hashHistory}>
				{apps.map((app, i) => {
					return <Route key={i} path={app.path} component={app.app}/>
				})}
			</Router>
			)
	}

	componentWillMount(){
		
	}
	
	componentDidMount() {

	}

}

	ReactDOM.render(<App></App>,document.getElementById('fly-main-ui'));
 

