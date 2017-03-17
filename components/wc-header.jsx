import React, { Component } from 'react';
import {WCPubCom} from './public/pub.jsx';
import './css/header.css';

class WCHeader extends Component {
	render() {


		return (
			<div className='wc-header-ui'>
					<aside className='wc-header-l' onTouchTap={this.goBack.bind(this)}>
							<div><img src='./assets/images/back.png'/></div>
					</aside>
					<aside className='wc-header-c'>{this.props.logo|| <img src='./assets/images/logo.png'/>}</aside>
					<aside className='wc-header-r' onTouchTap={this.rightMenuClick.bind(this)}>
							<div>{this.props.rightMenu||<img src='./assets/images/menu.png'/>}</div>
					</aside>
			</div>
		);
	}

	rightMenuClick(){
		
		if(this.props.type === 'detail'){

			if(window.H5Manager){
					H5Manager.showShare(this.props.title,(this.props.describe||'').stripHTML(),window.shareIco,window.location.href.split('?')[0],this.props.isLive);
				}
		}
		else{//列表
			if(window.H5Manager){//收藏接口
					var userId = H5Manager.getUserID();
				}
		}
	}

	goBack(){
		var subjectId = this.props.subjectId;
		if(subjectId!==-1 && subjectId !== undefined){//页面是从专题列表进来的
				location.href='/#/subject/'+ subjectId;
		}else{
			if(window.H5Manager){
					H5Manager.goBack();
			}	
		}
		
}

}


WCHeader.defaultProps = {
	subjectId:-1,
	type:'detail',//区分是专题列表 ，还是其它 
	isLive:0 //是否是直播
}
export default WCPubCom(WCHeader);
