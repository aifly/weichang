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
			isCollect:false,
			imgSrc:'',
			describe:'',
			list:[
				/*{
					id:'1',
					type:'field',
					imgSrc:'./assets/images/feild.jpg',
					name:'798艺术区约美术馆',
					detail:{
						address:'朝阳区',
						area:'1500m2',
						maxPerson:'1000'
					},
					title:'城市让生活更美好，而城市里的美丽人生，从美术馆开始。',
					describe:'这里的展览从来不会让挑剔的观众失望，什么样的艺术大师都来过。新馆是2008年10月新建的，地处偏远，但来的人很多。整个建筑设计得非常有特色，展示的空间布局合理，移步换景。由建筑师矶崎新设计，据说设计费每平米达700元。'
				},
				{
					id:'2',
					type:'news',
					imgSrc:'./assets/images/f-remark.jpg',
					title:'城市里面的美丽人生，从美术馆开始。',
					describe:'这里的展览从来不会让挑剔的观众失望，什么样的艺术大师都来过。新馆是2008年10月新建的，地处偏远，但来的人很多。整个建筑设计得非常有特色，展示的空间布局合理，移步换景。由建筑师矶崎新设计，据说设计费每平米达700元。'
				},
				{
					id:1,
					type:'video',
					isVr:true,
					imgSrc:'./assets/images/video-poster.jpg',
					from:{
						src:'./assets/images/yk-logo.png',
						name:'优酷'
					},
					videoTitle:'2017年维多利亚的秘密秀场直播',
					duration:'01:54:30',
					follow:355,
					desTitle:'城市里面的美丽人生，从美术馆开始。',
					describe:'这里的展览从来不会让挑剔的观众失望，什么样的艺术大师都来过。新馆是2008年10月新建的，地处偏远，但来的人很多。整个建筑设计得非常有特色，展示的空间布局合理，移步换景。由建筑师矶崎新设计，据说设计费每平米达700元。'
				}*/
			]
		}
		this.subjectId = 100;
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {
 
		var headerProps = {
			rightMenu:this.state.isCollect?<img src='./assets/images/collect1.png'/>:<img src='./assets/images/collect.png'/>,
			type:'subjectlist'//列表页面
		}
		return (
			<div className="wc-subject-main-ui">
				<WCHeader {...headerProps}></WCHeader>
				<div className='wc-subject-scroll-C' ref='wc-subject-scroll-C' style={{height:this.viewH - 64,overflow:'hidden'}}>
					{this.state.imgSrc && <ul>
						<li>
							<img src={this.state.imgSrc}/>
							<div className='wc-subject-main-describe'>{this.state.describe}</div>
						</li>
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
											<span>{item.detail.address}</span>
											<span>{item.detail.area}</span>
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
												<Link to={'/'+item.type+'/'+item.id+'/'+this.subjectId}>	{item.title}</Link>
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
														{item.isVr && <img className='wc-subject-vr' src='./assets/images/vr.png'/>}
												</div>
												<div className='wc-subject-video-info'>
														<aside>
																<div className='wc-subject-from-logo' style={{background:'url(./assets/images/logo-bg.png) no-repeat center center',backgroundSize:'contain',padding:6,boxSizing:'border-box'}}>
																	<img src={item.from.src}/>
																</div>
																<div style={{textAlign:'center'}}>{item.from.name}</div>
														</aside>
														<aside>
																<h2>{item.videoTitle}</h2>
																<div className='wc-subject-video-duration'>
																	<span>{item.duration}</span>
																	<span>|</span>
																	<span><img src='./assets/images/heart.png'/>{item.follow}</span>
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
					}
				</div>
			</div>
		)
	}


	componentDidMount(){
		var subjectID = this.props.params.id || 'LocXxuu4'
		this.subjectId = subjectID;
		var s = this;
	  $.ajax({
	  	url:window.baseUrl + '/get_subject_detail',
	  	data:{
	  		subjectID:subjectID
	  	},
	  	success(data){
	  		if(data.code  === 200){
	  			var result = data.result;
	  			s.state.imgSrc = result.imgSrc;
	  			s.state.describe = result.describe;
	  			s.state.list = result.list;

	  			s.forceUpdate();
	  			var imgList = [s.state.imgSrc];
	  			s.state.list.map((item,i)=>{
	  				imgList.push(item.imgSrc);
	  			});
	  			loading(imgList,null,()=>{
	  				s.scroll = new IScroll(s.refs['wc-subject-scroll-C'],{
							preventDefault:false
						});
	  			});
	  		}
	  	}
	  })
		
	}
}
export default WCPubCom(SubjectApp);

