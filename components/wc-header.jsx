import React, { Component } from 'react';
import {WCPubCom} from './public/pub.jsx';
import './css/header.css';

import $ from 'jquery';

class WCHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text:''
		}
		this.viewW = document.documentElement.clientWidth;
	}
	render() {
	
		return (
			<div className='wc-header-ui'>
					<aside className='wc-header-l' onTouchTap={this.goBack.bind(this)}>
							<div><img src='./assets/images/back.png'/></div>
							{this.state.text}
					</aside>
					<aside className='wc-header-c' onTouchTap={this.restorePos.bind(this)}>{this.props.logo|| <img style={{width:this.viewW/750*310}} src='./assets/images/logo1.png'/>}</aside>
					<aside className='wc-header-r' onTouchTap={this.rightMenuClick.bind(this)}>
							<div>{this.props.rightMenu||<img src='./assets/images/menu.png'/>}</div>
					</aside>
			</div>
		);
	}

	componentDidMount() {
	}

	restorePos(){
		this.props.scroll &&  this.props.scroll.scrollTo(0,0,200);
	}

	rightMenuClick(){
		

		if(this.props.type === 'detail'){
			if(window.H5Manager){
					H5Manager.showShare(this.props.title,(this.props.describe||'').stripHTML(),window.shareIco,window.location.href.split('?')[0],this.props.ID,this.props.isLive,this.props.isCollect,this.props.resType);
				}
		}
		else{//列表

				 
			if(window.H5Manager){//收藏接口
				var userId = H5Manager.getUserID();
				var subjectId = this.props.subjectId;
				var isCollect = this.props.isCollect ;
				if(userId*1 === -1){
					H5Manager.redirectToLogin();
					return;
				}
				$.ajax({
					url:window.baseUrl + '/collect',
					data:{
						resid:subjectId,
						restype:4, //专题
						phone:userId,
						collect:isCollect?0:1
					},
					success(data){
						
						if(data.code === 200){
							var result = data.result;
							window.obserable.trigger({
								type:'modifyIsCollect',
								data:result === '1'? 'true':'false'
							})
						}
					}
				})
			}
		}
	}

	goBack(){
		var subjectId = this.props.subjectId;

		if(subjectId!==-1 && subjectId !== undefined){//页面是从专题列表进来的 \非专题
				if(this.props.resType === 4){
					if(window.H5Manager){
						H5Manager.goBack();
					}
				}else{
					location.hash='#/subject/'+ subjectId+'?k='+ new Date().getTime();
				}
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
