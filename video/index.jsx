import React, { Component } from 'react';
import WCHeader from '../components/wc-header.jsx';
import {WCPubCom} from '../components/public/pub.jsx';
import IScroll from 'iscroll';
import  $ from 'jquery';
import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import './assets/css/index.css';
import VideoChildApp from '../components/video.jsx';

class VideoApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videoShow:false,
			scrollHeight:0,
			videoObj:{
				"poster":"./assets/images/video-poster.jpg",
				"isVr":true,
				"watch":"1235",
				"videoSrc":'',//"http://pili-live-hls.live.zmiti.com/test-wechang/wechang.m3u8"
				"title":"2016年维多利亚的秘密秀场",
				"cate":"时尚",
				"time":"01:35:55",
				"collect":"124",
				"from":{
					"src":"./assets/images/yk-logo.png",
					"name":"优酷"
				},
				"remark":"尤伦斯当代艺术中心的展览规格大都不小，尤其能给人惊喜的是这里的布展。展厅经常会被艺术家打造成全新的空间，王迈把这里变成过狭窄的蓝色海峡，徐震在这里开过超市，前阵子这里又被重新装置成了可以隐居的“家”，而这种展厅的开发利用，也使得美术馆的展览看起来更加诱人。尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，尤伦斯当代艺术中心的展览规格大都不小，"	
			}
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {

		var  posterStyle = {
			width:this.viewW,
			height:this.viewW * 3 /4,
			background:'url('+this.state.videoObj.poster+') no-repeat center center',
			backgroundSize:'cover'
		}
		var data = this.state;
		data.startPlay = this.startPlay.bind(this);
		return (
			<div className="wc-video-main-ui">
				<WCHeader></WCHeader>
				<div className="wc-video-remark-scroll" ref='wc-video-remark-scroll' style={{height:this.state.scrollHeight,overflow:'hidden'}}>
					<div>
					<VideoChildApp {...data}></VideoChildApp>
						<div className='wc-video-remark'>{this.state.videoObj.remark}</div>
					</div>
				</div>
			</div>
		)
	}

	startPlay(){
		//alert(Hls.isSupported);
		this.setState({videoShow:true});
		/*if(Hls.isSupported()) {
		 alert(3)
		 var video = this.refs['video'];
		 var hls = new Hls();
		 hls.loadSource(this.state.videoSrc);
		 hls.attachMedia(video);
		 hls.on(Hls.Events.MANIFEST_PARSED,function() {
		 video.play();
		 });
		 }*/
		/*	var src =this.state.videoSrc;
		 var params = {
		 container: document.getElementsByClassName("wc-video-poster")[0],
		 name:"SceneViewer",
		 dragDirectionMode:true,
		 dragMode:false,
		 fullScreenMode:true,
		 scenesArr:[
		 //todo:注意修改视频路径，需要保证播放页面与视频属于同一域名下
		 {sceneId:"v1", sceneName:"赛车", sceneFilePath:src, sceneType:"Video",initFov:110}
		 ],
		 //播放器不支持全景播放回调
		 errorCallBack:function(e){
		 console.log("错误状态：" + e);
		 },
		 //浏览器不支持全屏回调
		 fsCallBack:function(status,playObj){
		 alert("浏览器不支持全屏！");
		 }
		 };
		 //$('.wc-video-poster').css({position:'fixed',left:0,top:0,width:'100%','height':'100%'});
		 /*初始化开始*/

	}


	componentDidMount(){
		this.setState({
			scrollHeight:this.viewH -  64
		});
		setTimeout(()=>{
			this.scroll = new IScroll(this.refs['wc-video-remark-scroll'],{
				preventDefault:true
			});
		},1000);

		var id = this.props.params.id;
		var s = this;
		$.ajax({
			url:window.baseUrl + '/get_video_detail',
			data:{
				videoId:id,
			},
			success(data){
				console.log(data);
				if(data.code === 200){
					var result = data.result;
					console.log(result)
					s.state.videoObj = result;
					s.forceUpdate();
				}
			}
		})






	}
}
export default WCPubCom(VideoApp);

