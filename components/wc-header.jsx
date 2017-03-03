import React, { Component } from 'react';
import {WCPubCom} from './public/pub.jsx';
import './css/header.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class WCHeader extends Component {
	render() {
		return (
			<div className='wc-header-ui'>
					<aside className='wc-header-l'>
							<div><img src='./assets/images/back.png'/></div>
					</aside>
					<aside className='wc-header-c'>{this.props.title|| <img src='./assets/images/logo.png'/>}</aside>
					<aside className='wc-header-r'>
							<div>{this.props.rightMenu||<img src='./assets/images/menu.png'/>}</div>
					</aside>
			</div>
		);
	}
}

export default WCPubCom(WCHeader);
