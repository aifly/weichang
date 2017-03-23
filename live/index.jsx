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
			comment:'',
			defaultRemarkState:'查看更多',
			isCollect:'false',
			commentHeight:0,
			videoShow:true,
			commentBoxShow:false,
			inputShow:true,
			scrollHeight:'auto',
			commentBottom:0,
			windowH:0,
			scale:9/16,
			videoObj:{
				"poster":"",
				"isVr":true,
				"videoSrc":'http://pili-live-hls.live.zmiti.com/test-wechang/wechang.m3u8',//"http://pili-live-hls.live.zmiti.com/test-wechang/wechang.m3u8"
				"title":"2016年维多利亚的秘密秀场",
				"cate":"时尚",
				"time":"01:35:55",
				"collect":"124",
				
				"from":{
					"src":"",
					"name":"优酷"
				},
				"remark":"",
			
			},
			"commentList":[
				/*{
		 			 ico:"http://webapi.zmiti.com/public/weichang/assets/images/logo300.jpg",
		 			 name:'我',
		 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
	 			},
	 			{
		 			 ico:"http://webapi.zmiti.com/public/weichang/assets/images/logo300.jpg",
		 			 name:'优酷',
		 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
	 			},
	 			{
		 			 ico:"http://webapi.zmiti.com/public/weichang/assets/images/logo300.jpg",
		 			 name:'优酷',
		 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
	 			}*/
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
		data.container = 'live-video2'

		var headerProps = {
			subjectId:this.props.params.subjectId,
			...this.state,
			isLive:1,
			describe:this.state.videoObj.remark,
			isCollect:this.state.isCollect === 'true'? 1 : 0,
			resType:2, //1场地  2 视频  3 资讯 4 专题
			ID:this.props.params.id
		}

		return (
			<div className="wc-video-main-ui" style={{WebkitTransform:'translateY('+this.state.windowH+'px)'}}>
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
								<aside className='wc-live-from'>
									<section style={{background:'url('+item.ico+') no-repeat center / contain'}}><img src={'./assets/images/logo-bg.png'}/></section>
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
					 <div className="wc-live-input"  onTouchStart={this.displayCommentBox.bind(this)}>
						 <aside>
							 <img src="./assets/images/write.png" alt=""/>
							 <div></div>
						 </aside>
						 <aside>
							 <button>评论</button>
						 </aside>
					 </div>
				</div>
				<div className={'wc-comment-box '+(this.state.commentBoxShow?'active':'')} >
					<div>
						<button onTouchStart={this.cancel.bind(this)}>取消</button>
						<button onTouchTap={this.publishComment.bind(this)}>发送</button>
					</div>
					<textarea hidden onChange={(e)=>{this.setState({comment:e.target.value})}} onBlur={this.boxBlur.bind(this)} autoFocus onFocus={this.boxFocus.bind(this)} ref='wc-input'></textarea>
				</div>
			</div>
		)
	}

	cancel(){
		this.refs['wc-input'].blur();
		this.setState({commentBoxShow:false,comment:''});

	}

	boxBlur(){
		this.setState({
			windowH:0
		})
	}

	boxFocus(){
		var startH = window.innerHeight;
		document.activeElement.scrollIntoViewIfNeeded && document.activeElement.scrollIntoViewIfNeeded();
	}

	displayCommentBox(){
		this.setState({commentBoxShow:true},()=>{
			setTimeout(()=>{
				this.refs['wc-input'].style.display='block';
			},10)
		})
		
		
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

	publishComment(){
		var id = this.props.params.id;
		if(window.H5Manager){
			var phone = H5Manager.getUserID();

			var s = this;
			if(s.state.comment.length<=0){
				return;
			}
			console.log({
					resid:id,
					restype:2,
					phone:phone,
					comment:s.state.comment
				})
			$.ajax({
				url:window.baseUrl+'/comment',
				data:{
					resid:id,
					restype:2,
					phone:phone,
					content:s.state.comment
				},
				error(){
					
				},
				success(data){
					console.log(data);
					if((data.result*1 === 1)){
						s.commentList.push({
							ico:s.avatarUrl || window.shareIco,
							name:s.nickName || '我',
							content:s.state.comment
						});
						s.setState({comment:''});
					}
				}
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

		 if(window.H5Manager){
            H5Manager.showVideo(this.state.videoObj.title,this.state.videoObj.videoSrc,1,1);
     }
	 
	}

	 randomString(len = 8) {
	
	　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	　　var maxPos = $chars.length;
	　　var pwd = '';
	　　for (var i = 0; i < len; i++) {
	　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	　　}
	　　return pwd;
	}

	loadComment(s){
		
		if(s.commentList.length>0 &&s.refs['wc-live-comment-list']){
        		var item = s.commentList.shift();
        		
        		s.state.commentList.push({
        			ico:item.head,
        			name:item.name,
        			content:item.content
        		});
        		if(s.state.commentList.length>200){
        			for(var i = 0;i<50;i++){
        				s.state.commentList.shift();//最多显示100条评论。
        			}
        		}
				s.forceUpdate()
				var y = s.state.commentHeight - s.refs['wc-live-comment-list'].querySelector('ul').offsetHeight;
				if(y>-10){
					y = 0;
				}
				s.scrollTo(y);
				s.commentScroll.refresh();	
        	}
	}

	componentDidMount(){

		var id = this.props.params.id;
		var s = this;

		this.commentList = this.commentList || [];
		var source = new EventSource(window.baseUrl+'/get_comment?resid='+id+"&id="+s.randomString());

        source.addEventListener('message',function (e) {
        	if(JSON.parse(e.data) && JSON.parse(e.data).commentList){
        		JSON.parse(e.data).commentList.map((item,i)=>{
	        		s.commentList.push(item);
	        	});	
        	}
        	
        });

       this.timer =  setInterval(()=>{
        	s.loadComment(s);
		},1000)



		if(window.H5Manager){
			var phone =  H5Manager.getUserID();	
			$.ajax({
				url:window.baseUrl + 'get_info',
				data:{
					phone
				},
				success(data){
					if(data.code === 200){
						var result = data.result;
						s.nickName = result.nickname;
						s.avatarUrl = result.avatarUrl;
					}
				}
			})
		
		}
		
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
			error(){
			},
			success(data){
				if(data.code === 200){
					var result = data.result;
					s.state.videoObj = result;
					s.state.isCollect = result.isCollect;
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
							 var commentHeight = s.viewH - s.refs['wc-live-remark-scroll'].offsetHeight - 64 ;
							 s.setState({commentHeight:commentHeight})
							  s.commentScroll = new IScroll(s.refs['wc-live-comment-list']);
							  var startY = 0;

							 	s.scrollTo(s.state.commentHeight - s.refs['wc-live-comment-list'].querySelector('ul').offsetHeight);

							  s.refs['wc-live-comment-list'].addEventListener('touchstart',function(e){
							  	var  e = e.changedTouches[0];
							  	startY = e.pageY;
							  	clearInterval(s.timer)
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
							  		s.timer = setInterval(()=>{
						  				s.loadComment(s);
						  			},1000)
							  	}
							  });
						},100);

					});
				}
			}
		})

	/*	var i = 0;

		setInterval(()=>{
			s.state.commentList.push({
		 			 ico:"./assets/images/yk-logo.png",
		 			 name:'优酷',
		 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表'+(i++)
			});
			s.forceUpdate()
			s.scrollTo(s.state.commentHeight - s.refs['wc-live-comment-list'].querySelector('ul').offsetHeight);
			s.commentScroll.refresh();
			

		},1000)*/
	}

	scrollTo(y,time = 200){
		this.commentScroll && this.commentScroll.scrollTo(0,y,time);
	}

	listen(){

	}

	componentWillUnmount() {
		document.ontouchend = document.ontouchmove = null;	
	}
}
export default WCPubCom(LiveApp);

