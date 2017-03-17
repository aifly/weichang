import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import FieldApp from './field/index.jsx';
import VideoApp from './video/index.jsx';
import LiveApp from './live/index.jsx';
import NewsApp from './news/index.jsx';
import SubjectApp from './subject/index.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './assets/css/index.css';

import Obserable from './assets/libs/obserable.js';
var obserable = new Obserable();
class App extends React.Component{
	constructor(args) {
		super(...args);
		this.state = {
			toast:'点赞成功',
			isToast:false
		}
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
			<div>
				<Router history={hashHistory}>
					{apps.map((app, i) => {
						return <Route key={i} path={app.path} component={app.app}/>
					})}
				</Router>
				<div className={'wc-toast '+(this.state.isToast?'active':'')}>
						{this.state.toast}
				</div>
			</div>
			)
	}

	componentWillMount(){
		window.historyArr = [];
		window.obserable = obserable;
	}
	
	componentDidMount() {
		this.toast = true;
		obserable.on('toast',(data)=>{
			if(this.toast){
					this.toast = false;
					this.setState({
					toast:data||'点赞成功',
					isToast:true
				});
				setTimeout(()=>{
					this.setState({isToast:false});
					this.toast = true;
				},1000)	
			}
		});
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
 

String.prototype.stripHTML = function() {
    var reTag = /<(?:.|\s)*?>/g;
    return this.replace(reTag,"");
  }