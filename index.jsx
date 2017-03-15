import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import FieldApp from './field/index.jsx';
import VideoApp from './video/index.jsx';
import LiveApp from './live/index.jsx';
import NewsApp from './news/index.jsx';
import SubjectApp from './subject/index.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Obserable from './assets/libs/obserable.js';

class App extends React.Component{
	constructor(args) {
		super(...args);
	}
	render() {
		var apps = [
				{path: '/:id', app:FieldApp },
				{path: '/field/:id(/:subjectId)', app:FieldApp },
				{path: '/video/:id(/:subjectId)', app:VideoApp },
				{path: '/live/:id(/:subjectId)', app:LiveApp },
				{path: '/news/:id(/:subjectId)', app:NewsApp },
				{path: '/subject/:id', app:SubjectApp },
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
		window.historyArr = [];
	}
	
	componentDidMount() {

	}

}

var main = document.getElementById('fly-main-ui');
main.style.opacity = 0;

setTimeout(()=>{
	ReactDOM.render(<App></App>,main);
},500);
setTimeout(()=>{
	main.style.opacity = 1;
},800)
 

