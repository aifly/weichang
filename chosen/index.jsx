import React, { Component } from 'react';
import WCHeader from '../components/wc-header.jsx';
import {WCPubCom} from '../components/public/pub.jsx';
import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
class ChosenApp extends Component {
	
	constructor(props) {
		super(props);
					
	}		
	render() {
		return (
			<div className='wc-chosen-ui'>
					<WCHeader></WCHeader>
			</div>
		);
	}
}
export default WCPubCom(ChosenApp);

