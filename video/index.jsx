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
			isCollect:'false',
			scrollHeight:0,
			videoObj:{
				"poster":"",
				"isVr":true,
				"watch":"1235",
				"videoSrc":'',//"http://pili-live-hls.live.zmiti.com/test-wechang/wechang.m3u8"
				"title":"",
				"cate":"时尚",
				"time":"01:35:55",
				"collect":"124",
				"from":{
					"src":"",
					"name":""
				},
				"remark":""	
			}
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {

		var  posterStyle = {
			width:this.viewW,
			height:this.viewW * 3 /4,
		}
		if(this.state.videoObj.poster){
			posterStyle.background = 'url('+this.state.videoObj.poster+') no-repeat center center';
			posterStyle.backgroundSize='cover';
		}
		var data = this.state;
		data.startPlay = this.startPlay.bind(this);


			var headerProps = {
				subjectId:this.props.params.subjectId,
				title:this.state.videoObj.title,
				describe:this.state.videoObj.remark,
				isCollect:this.state.isCollect === 'true'? 1 : 0,
				resType:2, //1场地  2 视频  3 资讯 4 专题,
				ID:this.props.params.id
			};

		return (
			<div className="wc-video-main-ui">
				{!window.H5Manager && <a href='javascript:void(0)'><img src='./assets/images/banner_top_open.jpg'/></a>}
				<WCHeader {...headerProps}></WCHeader>
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
		
		var src = this.state.videoObj.videoSrc;
				//src='http://o8pomesqq.bkt.clouddn.com/5252.mp4'

				 var params = {
				 container: document.getElementsByClassName("wc-video-poster")[0],
				 name:"SceneViewer",
				 dragDirectionMode:true,
				 dragMode:false,
				 fullScreenMode:true,
				 scenesArr:[
				 //todo:注意修改视频路径，需要保证播放页面与视频属于同一域名下
				 {sceneId:"v1", sceneName:"智媒体", sceneFilePath:src, sceneType:"Video",initFov:110}
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
		
		this.state.videoShow=true;
		this.forceUpdate();
		if(this.state.videoObj.isVr * 1 === 0){//普通视频
			if(window.H5Manager){//
		      H5Manager.showVideo(this.state.videoObj.title,this.state.videoObj.videoSrc,0,this.state.videoObj.isVr*1);
			}else{
			 	//initLoad(params);
			}
		}else{
			initLoad(params);//VR视频、调用utovr的播放器。
		}
		
 

	}


	componentDidMount(){

		var id = this.props.params.id;
		var s = this;

		window.updateCollect = function(data){
			 s.setState({
		 		isCollect:data+''
			 });
		}

		window.obserable.on('updateCollect',()=>{
			$.ajax({
				url:window.baseUrl+'send_like',
				data:{
					resID:id
				},
				success(data){
					console.log(data)
					if(data.code === 200 && data.result*1 === 1){
						 window.obserable.trigger({
			            type:'toast',
			            data:''
			        });
						s.state.videoObj.collect = s.state.videoObj.collect*1 + 1;
						s.forceUpdate();
					}
				}
			});
		});

		this.setState({
			scrollHeight:this.viewH -  64
		});
		setTimeout(()=>{
			this.scroll = new IScroll(this.refs['wc-video-remark-scroll'],{
				preventDefault:true
			});
		},1000);

		
		$.ajax({
			url:window.baseUrl + '/get_video_detail',
			data:{
				videoId:id,
			},
			success(data){
				console.log(data);
				if(data.code === 200){
					var result = data.result;
					s.state.isCollect = result.isCollect;
					s.state.videoObj = result;
					s.forceUpdate();
				}
			}
		})






	}
}
export default WCPubCom(VideoApp);

