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
			"title":"城市让生活更美好，而城市里的美丽人生， 从美术馆开始。",
			"date":"2017/03/06",
			"from":"维场",
			type:0,//0图片 1、视频
			"name":"小ming",
			"follow":"2352万",
			"imgSrc":"./assets/images/f-remark.jpg",
			"content":"这里的展览从来不会让挑剔的观众失望，什么样的艺术大师都来过。新馆是2008年10月新建的，地处偏远，但来的人很多。整个建筑设计得非常有特色，展示的空间布局合理，移步换景。由建筑师矶崎新设计，据说设计费每平米达700元。除了中国美术馆、798艺术区，京城还有很多美术馆藏在各个充满艺术气息的角落。带着家人和朋友去美术馆感受下艺术氛围，不啻为一个消夏的好选择。今天就来盘点下京城美术馆。"
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
					<div>
						<h2 className='wc-news-title'>{this.state.title}</h2>
						<div className='wc-news-info'>
							<aside>
								<span>{this.state.date}</span>|
								<span>{this.state.from}</span>
								<span>{this.state.name}</span>
							</aside>
							<aside>
								<img onTouchTap={this.dianzan.bind(this)} src='./assets/images/heart.png' alt/>
								<span>{this.state.follow}</span>
							</aside>
						</div>
						<div className='wc-news-img'>
							<img src={this.state.imgSrc}/>
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
			 		isCollect:data
			 });
		}


		var id = this.props.params.id;
		this.messageID = id;
		$.ajax({
			url:window.baseUrl + '/get_news_detail',
			data:{
				messageID:id
			},
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

