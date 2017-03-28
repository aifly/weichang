import React, { Component } from 'react';
import WCHeader from '../components/wc-header.jsx';
import {WCPubCom} from '../components/public/pub.jsx';
import  $ from 'jquery';
import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import './assets/css/index.css';
import VideoChildApp from '../components/video.jsx';
//import IScroll from '../assets/libs/iscroll-probe';
import IScroll from 'iscroll';

class NewsApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isCollect:'false',
			"title":"",
			"date":"",
			"from":"",
			type:0,//0图片 1、视频
			"name":"",
			"follow":"",
			"imgSrc":"",
			"content":""
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {

		var headerProps = {
				subjectId:this.props.params.subjectId,
				...this.state,
				describe:this.state.content,
				isCollect:this.state.isCollect === 'true'? 1 : 0,
				resType:3 ,//1场地  2 视频  3 资讯 4 专题
				ID:this.props.params.id
			};	
		return (
			<div className="wc-news-main-ui">
				<WCHeader {...headerProps}></WCHeader>
				<div className="wc-news-scroll" ref='wc-news-scroll' style={{height:this.viewH - 64 ,overflow:'hidden'}}>
					<div style={{border:'1px solid transparent',paddingBottom:30}}>
						<h2 className='wc-news-title'>{this.state.title}</h2>
						<div className='wc-news-info'>
							<aside>
								<span>{this.state.date}</span>|
								<span>{this.state.from}</span>
								<span>{this.state.name}</span>
							</aside>
							<aside>
								{this.state.isZan?<img onTouchTap={this.dianzan.bind(this)}
									src="./assets/images/heart1.png" alt=""/>:<img
									onTouchTap={this.dianzan.bind(this)} src="./assets/images/heart.png" alt=""/>}
								<span>{this.state.follow}</span>
							</aside>
						</div>
						<div className='wc-news-img'>
							{this.state.imgSrc && <img src={this.state.imgSrc}/>}
						</div>
						<div className='wc-news-content' dangerouslySetInnerHTML={this.createMarkup()}>
						</div>
					</div>
				</div>
			</div>
		)
	}

	dianzan(){
		if(this.update){
			var s = this;
			var id = this.props.params.id;
        this.update = false;
        setTimeout(()=>{
            this.update = true;
        },1000);
        $.ajax({
			url:window.baseUrl+'send_like',
			data:{
				resID:id
			},
			success(data){
				if(data.code === 200 && data.result*1 === 1){
					 window.obserable.trigger({
		            type:'toast',
		            data:''
		        });
					s.state.follow = s.state.follow*1 + 1;
					s.state.isZan = true;
					s.forceUpdate();
				}
			}
		});
    }
	}

	HTMLDeCode(str) {
		var s = "";
		if (str.length == 0)    return "";
		s = str.replace(/&gt;/g, "&");
		s = s.replace(/&lt;/g, " <");
		s = s.replace(/&gt;/g, ">");
		s = s.replace(/&nbsp;/g, "    ");
		s = s.replace(/'/g, "\'");
		s = s.replace(/&quot;/g, "\"");
		s = s.replace(/ <br>/g, "\n");
		return s;
	}

	createMarkup(){
		 return {__html:  this.state.content};
	}
	componentDidMount(){

		this.update = true;
		var s = this;

		window.updateCollect = function(data){
			s.setState({
		 		isCollect:data+''
			 });
		}


		var id = this.props.params.id;
		var phone = -1;
		if(window.H5Manager){
			phone  = H5Manager.getUserID();
		}
		var params = {
			messageID:id
		}
		phone*1 !== -1 && (params.phone = phone);
		this.messageID = id;
		$.ajax({
			url:window.baseUrl + '/get_news_detail',
			data:params,
			success(data){
					if(data.code === 200){
							var result = data.result;
 
							s.state.title = result.title;
							s.state.date = result.date;
							s.state.isCollect = result.isCollect;
							s.state.from = result.from;
							s.state.type = result.type;
							s.state.name = result.name;
							s.state.follow = result.follow;
							s.state.imgSrc = result.imgSrc;
							var text = s.HTMLDeCode(result.content);

							s.state.content = text.replace(/&/g,'>');
							s.state.content = s.state.content.replace(/>amp;nbsp;/g,'');
							s.forceUpdate();
							var img = new Image();
							img.onload = img.onerror = function(){
								setTimeout(()=>{
									s.scroll = new IScroll(s.refs['wc-news-scroll']);
								},550)
							}
							img.src= s.state.imgSrc;
					} 
			}
		})
	}
}
export default WCPubCom(NewsApp);

