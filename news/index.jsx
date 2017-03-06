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
			"title":"城市让生活更美好，而城市里的美丽人生， 从美术馆开始。",
			"date":"2017/03/06",
			"from":"维场",
			"name":"小ming",
			"follow":"2352万",
			"imgSrc":"./assets/images/f-remark.jpg",
			"content":''
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {

		var headerProps = {
		}
		return (
			<div className="wc-news-main-ui">
				<WCHeader {...headerProps}></WCHeader>
				<div className="wc-news-scroll" ref='wc-news-scroll' style={{height:this.viewH - 44 ,overflow:'hidden'}}>
					<div>
						<h2 className='wc-news-title'>{this.state.title}</h2>
						<div className='wc-news-info'>
							<aside>
								<span>{this.state.date}</span>|
								<span>{this.state.from}</span>
								<span>{this.state.name}</span>
							</aside>
							<aside>
								<img src='./assets/images/heart.png' alt/>
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
		var s = this.HTMLDeCode('&lt;p&gt;&lt;strong&gt;国家体育场（鸟巢）&lt;/strong&gt;位于北京奥林匹克公园中心区南部，为2008年&lt;strong&gt;&lt;span style="color: rgb(255, 0, 0);"&gt;北京奥运会&lt;/span&gt;&lt;/strong&gt;的主体育场。工程总占地面积21公顷，场内观众坐席约为91000个。举行了奥运会、残奥会开闭幕式、&lt;strong&gt;&lt;span style="text-decoration: underline;"&gt;&lt;em&gt;田径比赛&lt;/em&gt;&lt;/span&gt;&lt;/strong&gt;及足球比赛决赛。奥运会后成为北京市民参与体育活动及享受体育娱乐的大型专业场所，并成为地标性的体育建筑和奥运遗产。&lt;/p&gt;&lt;p&gt;&lt;strong&gt;&lt;span style="color: rgb(23, 54, 93);"&gt;体育场由雅克·赫尔佐格、德梅隆、艾未未以及李兴刚等设计&lt;/span&gt;&lt;/strong&gt;，由北京城建集团负责施工。体育场的形态如同孕育生命的“巢”和摇篮，寄托着人类对未来的希望。设计者们对这个场馆没有做任何多余的处理，把结构暴露在外，因而自然形成了建筑的外观。&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;');
		this.setState({
			content:s.replace(/&/g,'>')
		})
		window.s = this;
		setTimeout(()=>{
			this.scroll = new IScroll(this.refs['wc-news-scroll']);
		},100);
	}
}
export default WCPubCom(NewsApp);

