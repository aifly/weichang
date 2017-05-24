import React, { Component } from 'react';
import WCHeader from '../components/wc-header.jsx';
import {WCPubCom} from '../components/public/pub.jsx';
import  $ from 'jquery';
import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import './assets/css/index.css';
import VideoChildApp from '../components/video.jsx';
//import IScroll from '../assets/libs/iscroll-probe';
import IScroll from 'iscroll';

class SubjectApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isCollect:"false",
			imgSrc:'',
			describe:'',
			list:[
				
			]
		}
		this.subjectId = 100;
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {
 		

		var headerProps = {
			rightMenu:this.state.isCollect === 'true' ? <img style={{marginTop:10}} src='./assets/images/collect1.png'/>:<img style={{marginTop:10}} src='./assets/images/collect.png'/>,
			type:'subjectlist',//列表页面,
			subjectId:this.subjectId,
			isCollect:this.state.isCollect === 'true' ? 1 : 0,
			resType:4,
			scroll:this.state.scroll
		}
		return (
			<div className="wc-subject-main-ui">
				<WCHeader {...headerProps}></WCHeader>
				<div className='wc-subject-scroll-C' ref='wc-subject-scroll-C' style={{height:this.viewH - 64,overflow:'hidden'}}>
					 <ul>
						{this.state.imgSrc &&<li>
							<img src={this.state.imgSrc}/>
							<div className='wc-subject-main-describe'>{this.state.describe}</div>
						</li>}
						{this.state.list.map((item,i)=>{
							let component =  <li key={i}></li>;
							switch(item.type){
								case "field":
								component = <li  key={i}>
									<section className='wc-subject-field'>
										<div className='wc-subject-field-img'>
											<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}><img src={item.imgSrc} /></Link>
										</div>
										<div className='wc-subject-field-prop'>
											<h4>{item.name}</h4>
											<span>{item.detail.address}</span><span>|</span>
											<span>{item.detail.area}</span><span>|</span>
											<span>最多容纳{item.detail.maxPerson}人</span>
										</div>
										<div className='wc-subject-field-title'>
												<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}>{item.title}</Link>
										</div>
										<div className='wc-subject-field-describe'>
												<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}>{item.describe}</Link>
										</div>
									</section>
								</li>
								break;
								case "news":
								component = <li  key={i}>
									<section className='wc-subject-news'>
										<div className='wc-subject-new-img'>
												<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}><img src={item.imgSrc} /></Link>
										</div>
										<h3 className='wc-subject-news-title'>
												<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}>{item.desTitle}</Link>
										</h3>
										<div className='wc-subject-news-describe'>
												<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}>{item.describe}</Link>
										</div>
										<div className='wc-subject-see-all'><Link to={'/'+item.type+'/'+item.id}>查看全部</Link></div>
									</section>
								</li>
								break;
								case "video":
								component = <li  key={i}>
											<section className='wc-subject-video'>
												<div className='wc-subject-video-img'>
														<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}><img src={item.imgSrc} /></Link>
														{(item.isVr==='1') && <img className='wc-subject-vr' src='./assets/images/vr.png'/>}
												</div>
												<div className='wc-subject-video-info'>
														<aside>
																<div className='wc-subject-from-logo'>
																	<section style={{background:'url('+item.from.src+') no-repeat center center / contain'}}><img src={'./assets/images/logo-bg.png'}/></section>
																</div>
																<div style={{textAlign:'center'}}>{item.from.name}</div>
														</aside>
														<aside>
																<h2>{item.videoTitle}</h2>
																<div className='wc-subject-video-duration'>
																	<span>{item.duration}</span>
																	<span></span>
																	<span><img style={{width:16}} src='./assets/images/heart.png'/>{item.follow}</span>
																</div>
														</aside>												
												</div>
												<h2 className='wc-subject-video-title'>
													<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}>{item.desTitle}</Link>
												</h2>
												<div className='wc-subject-video-describe'>
														<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}>{item.describe}</Link>
												</div>
										</section>
								</li>
								break;
							}
							return component;
						})}
					</ul>
				</div>
			</div>
		)
	}


	componentDidMount(){
		var subjectID = this.props.params.id || 'LocXxuu4'
		this.subjectId = subjectID;
		var s = this;

		window.obserable.on('modifyIsCollect',(data)=>{
			this.setState({
				isCollect:data
			})
		});

		var phone = -1;
		if(window.H5Manager){
			phone  = H5Manager.getUserID();
		}
		var params = {
			subjectID:subjectID
		}
		phone*1 !== -1 && (params.phone = phone);
		window.H5Manager&& H5Manager.log(window.baseUrl + '/get_subject_detail?subjectID='+subjectID+"&phone="+phone +' ------------------------');
		  $.ajax({
		  	url:window.baseUrl + '/get_subject_detail',
		  	data:params,
		  	error(){

		  	},
		  	success(data){
		  		if(data.code  === 200){

		  			var result = data.result;
		  			console.log(result)
		  			s.state.imgSrc = result.imgSrc;
		  			s.state.describe = (result.describe||'').substring(0,70);
		  			s.state.list = result.list;
	  				s.state.isCollect = result.isCollect;
		  			s.forceUpdate();
		  			s.scroll = null;
		  			setTimeout(()=>{
		  				s.scroll = new IScroll(s.refs['wc-subject-scroll-C'],{
							preventDefault:false
						});
						s.state.scroll = s.scroll;
						s.forceUpdate();
		  			},100 )
		  			var imgList = [];
		  			s.state.imgSrc && imgList.push(s.state.imgSrc);
		  			s.state.list.map((item,i)=>{
		  				imgList.push(item.imgSrc);
		  			});
		  			if(window.H5Manager){
						H5Manager.loadFinish && H5Manager.loadFinish();
					}
		  			loading(imgList,null,()=>{
		  				
		  				s.scroll && s.scroll.refresh();


		  			});
		  		}
		  	}
		  })
		
	}
}

export default WCPubCom(SubjectApp);

