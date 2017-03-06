import React, { Component } from 'react';
import WCHeader from '../components/wc-header.jsx';
import {WCPubCom} from '../components/public/pub.jsx';
import  $ from 'jquery';
import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import './assets/css/index.css';
import VideoChildApp from '../components/video.jsx';
//import IScroll from '../assets/libs/iscroll-probe';
import IScroll from 'iscroll';

class SubjectApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			imgSrc:'',
			describe:'',
			list:[
				{
					type:'field',
					'imgSrc':'./assets/images/feild.jpg',
					name:'798艺术区约美术馆',
					detail:{
						address:'朝阳区',
						area:'1500m2',
						maxPerson:'1000'
					},
					title:'城市让生活更美好，而城市里的美丽人生，从美术馆开始。',
					describe:' '

				}
			]
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {

		var headerProps = {
		}
		return (
			<div className="wc-subject-main-ui">
				<WCHeader {...headerProps}></WCHeader>
				 
			</div>
		)
	}


	componentDidMount(){
		
	}
}
export default WCPubCom(SubjectApp);

