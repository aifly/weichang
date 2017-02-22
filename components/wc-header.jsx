import React, { Component } from 'react';
import {WCPubCom} from './public/pub.jsx';
import './css/header.css';
class WCHeader extends Component {
	render() {
		return (
			<div className='wc-header-ui'>
					<aside className='wc-header-l'>
							<div><img src='./assets/images/back.png'/></div>
					</aside>
					<aside className='wc-header-c'>{this.props.title|| <img src='./assets/images/logo.png'/>}</aside>
					<aside className='wc-header-r'>
							<div><img src='./assets/images/collect.png'/></div>
					</aside>
			</div>
		);
	}
}

export default WCPubCom(WCHeader);
