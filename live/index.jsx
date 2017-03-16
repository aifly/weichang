import React, { Component } from 'react';
import WCHeader from '../components/wc-header.jsx';
import {WCPubCom} from '../components/public/pub.jsx';
import  $ from 'jquery';
import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import './assets/css/index.css';
import VideoChildApp from '../components/video.jsx';
//import IScroll from '../assets/libs/iscroll-probe';
import IScroll from 'iscroll';

class LiveApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			defaultRemarkState:'查看更多',
			commentHeight:0,
			videoShow:true,
			inputShow:true,
			scrollHeight:'auto',
			scale:9/16,
			videoObj:{
				"poster":"./assets/images/video-poster.jpg",
				"isVr":true,
				"videoSrc":'http://pili-live-hls.live.zmiti.com/test-wechang/wechang.m3u8',//"http://pili-live-hls.live.zmiti.com/test-wechang/wechang.m3u8"
				"title":"2016年维多利亚的秘密秀场",
				"cate":"时尚",
				"time":"01:35:55",
				"collect":"124",
				
				"from":{
					"src":"./assets/images/yk-logo.png",
					"name":"优酷"
				},
				"remark":"尤伦斯当代艺术中心的展览规格大都不小，尤其能给人惊览规格大都规格大都不，尤其能给人惊览规格大都规格大都不，尤其能给人惊览规格大都规格大都不，尤其能给人惊览规格大都规格大都不，尤其能给人惊览规格大都规格大都不小，尤伦斯当代艺术中心的展给人惊览规格大都规格大都不小，尤伦斯当代艺术中心的展给人惊览规格大都规格大都不小，尤伦斯当代艺术中心的展给人惊览规格大都规格大都不小，尤伦斯当代艺术中心的展中心的展览规格伦当代艺术中心的展览规格大都不小，",
			
			},
			"commentList":[
				{
					ico:'./assets/images/yk-logo.png',
					name:'优酷',
					content:'这个美术馆希望通过真实的材料，纯净真实的材料，纯净真实的材料，纯净的空间'
				},{
					ico:'./assets/images/yk-logo.png',
					name:'优酷',
					content:'这个美术馆希望通过真实的材料，纯净的空间'
				},{
					ico:'./assets/images/yk-logo.png',
					name:'优酷大侠',
					content:'这个美术馆希望通过真实的材料，纯净的空间'
				},{
					ico:'./assets/images/yk-logo.png',
					name:'陌陌',
					content:'这个美术馆希望通过真实的材料，'
				},{
					ico:'./assets/images/yk-logo.png',
					name:'陌陌',
					content:'这个美术馆希望通过真实的材料，'
				}
			]
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {

		this.defaultRemark = this.defaultRemark || this.state.videoObj.remark;
		var  posterStyle = {
			width:this.viewW,
			height:this.viewW * 3 /4,
			background:'url('+this.state.poster+') no-repeat center center',
			backgroundSize:'cover'
		}
		var data = this.state;
		data.startPlay = this.startPlay.bind(this);
		data.container = 'live-video'

		var headerProps = {
			subjectId:this.props.params.subjectId,
			...this.state,
			describe:this.state.videoObj.remark
		}

		return (
			<div className="wc-video-main-ui">
				<WCHeader {...headerProps}></WCHeader>
				<div className="wc-video-remark-scroll"  ref='wc-live-remark-scroll' style={{height:this.state.scrollHeight,overflow:'hidden'}}>
					<div>
						<VideoChildApp {...data}></VideoChildApp>
						<div className='wc-video-remark'>{this.state.videoObj.remark}</div>
						{this.state.videoObj.remark.length>50 && <div className="wc-live-more" onTouchTap={this.seeMoreDescribe.bind(this)}><span>{this.state.defaultRemarkState}</span></div>}
					</div>
				</div>
				<div className='wc-live-comment-list' ref="wc-live-comment-list" style={{height:this.state.commentHeight}}>
					<ul>
						{this.state.commentList.map((item,i)=>{
							return <li key={i}>
								<aside>
									<img src={item.ico} alt=""/>
									<span>{item.name}</span>
								</aside>
								<aside>
									{item.content}
								</aside>
							</li>
						})}
					</ul>
				</div>
				<div className={"wc-live-input-C " + (this.state.inputShow?'active':'')}>
					 <div className="wc-live-input">
						 <aside>
							 <img src="./assets/images/write.png" alt=""/>
							 <input type="text" placeholder="说点什么吧"/>
						 </aside>
						 <aside>
							 <button>发送</button>
						 </aside>
					 </div>
				</div>
			</div>
		)
	}

	seeMoreDescribe(){
		if(this.state.remark === this.defaultRemark){
					this.state.remark = this.state.remark.substring(0,32)+'...';
					this.state.defaultRemarkState = '查看更多';
					this.forceUpdate(()=>{
						this.setState({scrollHeight:this.minRemarkHeight});
						setTimeout(()=>{
							this.topScroll.refresh();
						},100)
					});
			}else{
				this.state.remark = this.defaultRemark;
				this.state.defaultRemarkState = '收起';
				this.forceUpdate(()=>{
						this.setState({scrollHeight:this.maxRemarkHeight - this.viewW /10 * 1.2});
						setTimeout(()=>{
							this.topScroll.refresh();
						},100)
				});

			}
	}

	startPlay(){
		//alert(Hls.isSupported);

		 var params = {
            container: document.getElementById('live-video'),
            name: "SceneViewer",
            isGyro:true,        //默认开启陀螺仪功能  移动端支持陀螺仪设备有效
            scenesArr: [
                //todo:注意修改视频路径，需要保证播放页面与视频属于同一域名下
                {
                    sceneId: "v1",
                    sceneName: "赛车",
                    sceneFilePath: this.state.videoObj.videoSrc,
                    sceneType: "Video",
                    isVideoAutoPlay: true  //todo:注意isVideoAutoPlay 是H5 模式下的播放属性，不适用于移动端
                }
            ],
            //播放器不支持全景播放回调
            errorCallBack: function (e) {
                console.log("错误状态：" + e);
            },
            //浏览器不支持全屏回调
            fsCallBack: function (status, playObj) {
                alert("浏览器不支持全屏！");
            }
        };
   
 //    initLoad(params);

    
 		this.state.videoObj.poster = '';
		this.state.videoShow=true;
		this.forceUpdate();
	 
	}


	componentDidMount(){
		
		var id = this.props.params.id;

		var s = this;

		window.obserable.on('updateCollect',()=>{
			
			$.ajax({
				url:window.baseUrl+'like',
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
		$.ajax({
			url:window.baseUrl + '/get_video_detail',
			data:{
				videoId:id,
			},
			success(data){
				if(data.code === 200){
					var result = data.result;
					console.log(result)
					s.state.videoObj = result;
					s.forceUpdate(()=>{

						s.defaultRemark = s.state.videoObj.remark;
						s.state.videoObj.remark = s.state.videoObj.remark.substring(0,32)+'...';

						
						s.forceUpdate(()=>{
							s.minRemarkHeight = s.refs['wc-live-remark-scroll'].offsetHeight;
						});

						s.isMaxHeight = s.refs['wc-live-remark-scroll'].offsetHeight > s.viewH;
						s.maxRemarkHeight =s.isMaxHeight? s.viewH -64 -6 : s.refs['wc-live-remark-scroll'].offsetHeight; 
						setTimeout(()=>{
							 s.topScroll = new IScroll(s.refs['wc-live-remark-scroll']);
							 var commentHeight = s.viewH - s.refs['wc-live-remark-scroll'].offsetHeight - 64 - 6;
							 s.setState({commentHeight:commentHeight})
							  s.commentScroll = new IScroll(s.refs['wc-live-comment-list']);
							  var startY = 0;

							  s.refs['wc-live-comment-list'].addEventListener('touchstart',function(e){
							  	var  e = e.changedTouches[0];
							  	startY = e.pageY;
							  	document.ontouchmove=function(e){
							  		var  e = e.changedTouches[0];
							  		var endY = e.pageY;
							  		s.setState({
							  			inputShow:startY<endY
							  		},()=>{
							  			startY = endY;
							  		});
							  	}
							  	document.ontouchend = function(e){
							  		var  e = e.changedTouches[0];
							  		s.ontouchend = s.ontouchmove = null;
							  	}
							  });
						},100);

					});
				}
			}
		})
	}
	componentWillUnmount() {
		document.ontouchend = document.ontouchmove = null;	
	}
}
export default WCPubCom(LiveApp);

