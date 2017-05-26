import React, { Component } from 'react';
import WCHeader from '../components/wc-header.jsx';
import {WCPubCom} from '../components/public/pub.jsx';
import IScroll from 'iscroll';
import  $ from 'jquery';
import { Router, Route, hashHistory ,Link ,browserHistory } from 'react-router';
import './assets/css/index.css';
class FieldApp extends Component {
	
	constructor(props) {
		super(props);
		this.state = {


			subjectId:"LocXxuu4",

			imgCount:5,

			 defaultDetailDescribeState:'查看更多',
			 defaultParamsState:'查看更多',
			 defaultCommentState:'查看更多',
			 defaultParamsCount:5,
			 commentHeight:'auto',
			 isFullScreen:false,

			 isCollect:'false',
			 describeSrc:'',
			 describeFull:'',
			 title:'',
			 cate:'',
			 addressObj:{
			 		address:'',
			 		longitude:'',//经度
			 		latitude:'',//纬度
				 	collect:'',
			 		tel:''//电话
			 },
			 detailDescribe:'',
			 commentList:[
			 		/*{
			 			 logo:"./assets/images/yk-logo.png",
			 			 name:'优酷',
			 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
			 		},{
			 			 logo:"./assets/images/yk-logo.png",
			 			 name:'优酷',
			 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
			 		},{
			 			 logo:"./assets/images/yk-logo.png",
			 			 name:'优酷',
			 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
			 		},{
			 			 logo:"./assets/images/yk-logo.png",
			 			 name:'优酷',
			 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
			 		},{
			 			 logo:"./assets/images/yk-logo.png",
			 			 name:'优酷',
			 			 content:' 这个美术馆希望通过真实的材料，纯净的空间表达，为当地和外来的参观者提供一个与自然光、绿树、水体以及当代艺术互相对话的场所。'
			 		}*/
			 ],
			 fieldParams:[//场地参数 
			 	/*	{
			 			name:'场内',
			 			size:'50/56/90',
			 			area:'1000m2',
			 			personCount:1000
			 		},{
			 			name:'场内',
			 			size:'50/56/90',
			 			area:'1000m2',
			 			personCount:1000
			 		},{
			 			name:'场内',
			 			size:'50/56/90',
			 			area:'1000m2',
			 			personCount:1000
			 		},{
			 			name:'场内',
			 			size:'50/56/90',
			 			area:'1000m2',
			 			personCount:1000
			 		},{
			 			name:'场内',
			 			size:'50/56/90',
			 			area:'1000m2',
			 			personCount:1000
			 		},{
			 			name:'场内',
			 			size:'50/56/90',
			 			area:'1000m2',
			 			personCount:1000
			 		}*/
			 ],
			 fieldPicList:[
			 		/*{
			 			src:"./assets/images/f-pic1.jpg",
						name:'外场'
			 		},{
			 			src:"./assets/images/f-pic2.jpg",
					    name:'内场'
			 		},{
			 			src:"./assets/images/f-pic3.jpg",
					 	name:'入场口'
			 		},{
			 			src:"./assets/images/f-pic1.jpg",
			 			name:'外场'
			 		},{
			 			src:"./assets/images/f-pic2.jpg",
			 			name:'内场'
			 		},{
			 			src:"./assets/images/f-pic3.jpg",
			 			name:'入场口'
			 		},{
			 			src:"./assets/images/f-pic1.jpg",
			 			name:'外场'
			 		},{
			 			src:"./assets/images/f-pic2.jpg",
			 			name:'内场'
			 		},{
			 			src:"./assets/images/f-pic3.jpg",
			 			name:'入场口'
			 		}*/
			 ],
			 fieldActive:{
			 	activeList:[]
				 	/*activePic:'./assets/images/active.jpg',
				 	activeList:[
				 		{
				 			id:1,
				 			type:'video',
				 			src:'./assets/images/active-detail1.jpg',
				 			name:'维多利亚的秘密秀场',
				 			date:'2016/01/22'

				 		},{
				 			id:2,
				 			type:'video',
				 			src:'./assets/images/active-detail2.jpg',
				 			name:'维多利亚的秘密秀场',
				 			date:'2016/01/22'
				 		},{
				 			id:3,
				 			type:'video',
				 			src:'./assets/images/active-detail2.jpg',
				 			name:'维多利亚的秘密秀场',
				 			date:'2016/01/22'
				 		},{
				 			id:4,
				 			type:'video',
				 			src:'./assets/images/active-detail2.jpg',
				 			name:'维多利亚的秘密秀场',
				 			date:'2016/01/22'
				 		},{
				 			id:5,
				 			type:'video',
				 			src:'./assets/images/active-detail2.jpg',
				 			name:'维多利亚的秘密秀场',
				 			date:'2016/01/22'
				 		},{
				 			id:6,
				 			type:'video',
				 			src:'./assets/images/active-detail2.jpg',
				 			name:'维多利亚的秘密秀场',
				 			date:'2016/01/22'
				 		}
				 	]*/
			 },
			 sameFeildList:[
				/* {
					 id:1,
					 src:'./assets/images/feild.jpg',
					 title:'798艺术区美术馆',
					 address:'朝阳区',
					 area:'1500m2',
					 personCount:'1000'

				 },{
					 id:1,
					 src:'./assets/images/feild.jpg',
					 title:'798艺术区美术馆',
					 address:'朝阳区',
					 area:'1500m2',
					 personCount:'1000'

				 },{
					 id:1,
					 src:'./assets/images/feild.jpg',
					 title:'798艺术区美术馆',
					 address:'朝阳区',
					 area:'1500m2',
					 personCount:'1000'

				 },{
					 id:1,
					 src:'./assets/images/feild.jpg',
					 title:'798艺术区美术馆',
					 address:'朝阳区',
					 area:'1500m2',
					 personCount:'1000'

				 },{
					 id:1,
					 src:'./assets/images/feild.jpg',
					 title:'798艺术区美术馆',
					 address:'朝阳区',
					 area:'1500m2',
					 personCount:'1000'

				 },{
					 id:1,
					 src:'./assets/images/feild.jpg',
					 title:'798艺术区美术馆',
					 address:'朝阳区',
					 area:'1500m2',
					 personCount:'1000'
				 }*/
			 ]
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
		this.defaultParamsCount = 5;
		this.fieldParams = 0;
		this.fieldParamsArr = [];
	}	

	fullscreen(){
		if(window.H5Manager) {
			H5Manager.showPanorama(this.state.describeFull);	
		} else{
			this.setState({isFullScreen:true});	
		}
	}

	exitFullscreen(){
		this.setState({isFullScreen:false});
	}

	render() {
			
			var headerProps = {
				subjectId:this.props.params.subjectId,
				title:this.state.title,
				describe:this.state.detailDescribe,
				isCollect:this.state.isCollect === 'true'? 1 : 0,
				resType:1, //1场地  2 视频  3 资讯 4 专题
				ID:this.props.params.id,
				scroll : this.state.scroll
			};	
			var style = {
				height:this.viewW/10*9.4*9/16
			}
			
		return (
			<div className='wc-field-ui'>
				{this.state.describeSrc && this.state.isFullScreen && <div className='wc-feild-back' onTouchTap={this.exitFullscreen.bind(this)}>返回</div>}
				{this.state.isFullScreen && <iframe className='wc-fullscreen' ref='wc-fullscreen' src={this.state.describeFull} frameBorder="0"></iframe>}
				<WCHeader {...headerProps}></WCHeader>
				<section ref="scroll" className="wc-field-scroll" style={{height:this.viewH - 64 }}>
					<div style={{border:'1px solid transparent',paddingBottom:20}}>
						<div className={'wc-field-describe ' +(this.state.isFullScreen?'active':'')} style={style}>
							{this.state.describeFull && <iframe height={this.viewW/10*9.4*9/16} width={this.viewW/10*9.4} src={this.state.describeSrc} frameBorder="0"></iframe>}
							{this.state.describeFull && <div className='wc-feild-fullscreen'  onTouchTap={this.fullscreen.bind(this)}><img src='./assets/images/f.png'/></div>}

						</div>
						<div className='wc-field-title-C'>
							<div className="wc-field-title-item">
								<h3>{this.state.title}</h3>
								<div className="wc-field-cate">{this.state.cate} | <span onTouchTap={this.dianzan.bind(this)}>{this.state.isZan?<img
									src="./assets/images/heart1.png" alt=""/>:<img
									src="./assets/images/heart.png" alt=""/>}</span> <span >{this.state.addressObj.collect}</span></div>
							</div>
							<div className='wc-field-tel wc-field-title-item'>
								<a href={'tel:'+this.state.addressObj.tel}><img src='./assets/images/tel.png'/></a>
							</div>
						</div>
						<div className="wc-field-address" onTouchTap={this.showMap.bind(this)}>
							<div><img  src="./assets/images/pos.png" alt=""/></div>
							<div><span className='wc-address'>地址：{this.state.addressObj.address}</span><span className='wc-entry-map'>></span></div>
						</div>
						<div className="wc-field-detail">
							{this.state.detailDescribe}
						</div>
						<div className="wc-field-more" onTouchTap={this.seeMoreDetailDescribe.bind(this)}><span className={this.state.defaultDetailDescribeState==='收起更多'?'active':''}>{this.state.defaultDetailDescribeState}</span></div>
						{<div className="wc-field-commit-C">
													<aside>专业提示</aside>
													<aside onTouchTap={this.showComment.bind(this)}><span><img src="./assets/images/commom.png" alt=""/></span>我要评论</aside>
												</div>}
						<div style={{overflow:'hidden',height:this.state.commentHeight}}>
							<ul className="wc-field-comment-list">
								{this.state.commentList.map((item,i)=>{
									return <li key={i}>
										<div><span style={{background:'url(./assets/images/logo-bg.png) no-repeat center center',backgroundSize:'contain','display':'inline-block'}}><img className="wc-comment-logo" src={item.logo}  alt=""/></span>{item.name}</div>
										<div className="wc-comment-content">{item.content}</div>
									</li>
								})}
							</ul>
						</div>
						{this.state.commentList.length>0 && <div className="wc-field-more" onTouchTap={this.seeMoreComment.bind(this)}><span className={this.state.defaultCommentState==='收起更多'?'active':''}>{this.state.defaultCommentState}</span></div>}
						{this.state.commentList.length<=0 && <div className='wc-field-no-comment'><img src='./assets/images/buchong.png'/></div>}

						{<div className="wc-field-commit-C wc-field-params">
													<aside>场地参数</aside>
													<aside></aside>
												</div>}
						{this.state.fieldParams.length >0 && <table className='wc-field-parameter-table'>
													<thead>
														<tr>
															<th>名称</th>
															<th>尺寸(L/W/H)</th>
															<th>面积</th>
															<th>容纳人数</th>
														</tr>
													</thead>
													<tbody>
														{this.state.fieldParams.filter((item,k)=>{
															return k < this.state.defaultParamsCount;
														}).map((item,i)=>{
															return <tr key={i}>
																		<td>{item.name}</td>
																		<td>{item.size}</td>
																		<td>{item.area}</td>
																		<td>{item.personCount}</td>
																	</tr>
														})}
													</tbody>
												</table>}
						{this.state.fieldParams.length <=0 && <div className='wc-field-no-comment'><img src='./assets/images/buchong.png'/></div>}
						{this.fieldParamsArr.length > this.defaultParamsCount && <div className="wc-field-more" onTouchTap={this.seeMoreParams.bind(this)}><span className={this.state.defaultParamsState==='收起更多'?'active':''}>{this.state.defaultParamsState}</span></div>}
						
						{ <div className="wc-field-commit-C">
													<aside>场地图片</aside>
													<aside></aside>
												</div>}

						<div className='wc-field-pic-scroll' ref='wc-field-pic-scroll'>
								<ul className='wc-field-pic-list' style={{width:(Math.min(this.state.imgCount,this.state.fieldPicList.length) +1)* (document.documentElement.clientWidth/ 10 * 4+ 10)}}>
										{this.state.fieldPicList.filter((item,i)=>{
											return i < this.state.imgCount;
										}).map((item,i)=>{
											return <li onTouchTap={this.showImage.bind(this,i)} key={i}>
													<div style={{background:'url('+item.src+') no-repeat left center / contain'}}></div>
													<section>{item.name}</section>
											</li>
										})}
										{this.state.fieldPicList.length > 0 && <li onTouchTap={this.showAllImage.bind(this)}>
											<div style={{background:'url(./assets/images/all1.png) no-repeat left center / contain'}}></div>
											<section style={{opacity:0}}>{'2222'}</section>
										</li>}
								</ul>
						</div>

						{this.state.fieldPicList.length <=0 && <div className='wc-field-no-comment'><img src='./assets/images/buchong.png'/></div>}

						{window.showActive && <div className="wc-field-commit-C">
													<aside>曾办活动</aside>
													<aside></aside>
												</div>}
						{window.showActive && <div className="wc-field-active">
													{this.state.fieldActive && this.state.fieldActive.activeList &&<div className='wc-field-active-img'>
														  <img src={this.state.fieldActive.activePic}/>
													</div>}
													<div  className="wc-field-active-scroll" ref='wc-field-active-scroll'>
														{!this.state.fieldActive.activeList && <div style={{width:'9.4rem',margin:'0 auto',color:'#ccc'}}></div>}
														{this.state.fieldActive.activeList && <ul  className="wc-field-active-list" style={{width:(this.state.fieldActive.activeList.length+1) * (document.documentElement.clientWidth/ 10 * 4+ 10)}}>
															{this.state.fieldActive.activeList.map((item,i)=>{
																return <li key={i}>
																	<div  style={{background:'url('+item.src+') no-repeat center center / cover',backgroundSize:'cover',height:'2.5rem'}} ><Link onTouchTap={()=>{setTimeout(()=>{window.location.reload();},500)}} to={'/'+ item.type+'/'+item.id}><img style={{opacity:0}} src={item.src}/></Link></div>
																	<h3>{item.name}</h3>
																	<div>{item.date}</div>
																</li>
															})}
															{false && <li>
																	<div  style={{background:'url(./assets/images/subjectMore.png) no-repeat center center',backgroundSize:'cover',height:'2.5rem'}}><Link to={'/subject/'+this.state.subjectId}>
																	<img src='./assets/images/subjectMore.png'/></Link></div>
																	<h3 style={{opacity:0}}>item.name</h3>
																	<div  style={{opacity:0}}>item.date</div>
																</li>}
							
														</ul>}
													</div>
												</div>}

						{window.showActive && this.state.fieldActive && (this.state.fieldActive.activeList &&  this.state.fieldActive.activeList.length <=0 )&& <div className='wc-field-no-comment'><img src='./assets/images/buchong.png'/></div>}

						{<div className="wc-field-same-C">
													<aside>相似场地</aside>
													<aside></aside>
												</div>}

						<div className="wc-feild-same-scroll" ref="wc-feild-same-scroll">
							<ul className="wc-feild-same-list" style={{width:this.state.sameFeildList.length * (document.documentElement.clientWidth/ 10 * 8 + 10)}}>
								{this.state.sameFeildList.map((item,i)=>{
									return <li key={i}>
										<div  style={{background:'url('+item.src+') no-repeat center center / cover',backgroundSize:'cover',height:'4.5rem',width:'8rem'}} ><Link onTouchTap={()=>{setTimeout(()=>{window.location.reload();},500)}} to={'/field/'+item.id} ><img src={item.src} style={{opacity:0}} alt=""/></Link></div>
										<h3>{item.title}</h3>
										<div style={{maxWidth:'8rem'}}><span>{item.address}</span><span></span><span>{item.area}㎡</span><span></span><span>最多容纳{item.personCount}人</span></div>
									</li>
								})}
							</ul>
						</div>
						{this.state.sameFeildList.length<=0 && <div className='wc-field-no-comment'><img src='./assets/images/buchong.png'/></div>}
					</div>
				</section>
			</div>
		);
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
			        s.state.isZan = true;
					s.state.addressObj.collect = s.state.addressObj.collect*1 + 1;
					s.forceUpdate();
				}
				}
		});

        
 
    }
	}
	seeMoreParams(){
		if(this.state.defaultParamsCount === this.defaultParamsCount){
			this.state.defaultParamsCount = this.fieldParamsArr.length;
			this.state.defaultParamsState = '收起更多';
		}else{
			this.state.defaultParamsCount = this.defaultParamsCount;
			this.state.defaultParamsState = '查看更多';
		}

		setTimeout(()=>{
			this.mainScroll && this.mainScroll.refresh();//刷新滚动条
		},100);

		this.forceUpdate();
	}

	showComment(){//进入评论页面
		if(window.H5Manager){
			H5Manager.showComment(this.state.title,this.fieldId,1);
		}
	}

	showMap(){
		if(H5Manager){
			H5Manager.log(this.state.addressObj.latitude+','+this.state.addressObj.longitude)
			window.H5Manager.showMap(this.state.addressObj.longitude,this.state.addressObj.latitude);
		}
	}

	showImage(index){
		if(window.H5Manager){
			var arr = [];

			this.state.fieldPicList.filter((item,i)=>{
				return i < this.state.imgCount;
			}).map((item,i)=>{
				arr.push(item.src);
			});
			var allArrSrc = [],
				allArrName = [];
			this.fieldPicList.map((item,i)=>{
				allArrSrc.push(item.src);
				allArrName.push(item.name);
			});
			
			H5Manager.showImage(index,arr,this.state.title,allArrSrc,allArrName);	
		}
	}

	showAllImage(){

		var allArrSrc = [],
			allArrName = [];

		this.fieldPicList.map((item,i)=>{
			allArrSrc.push(item.src);
			allArrName.push(item.name);
		});
		window.H5Manager && H5Manager.showAllImage(this.state.title,allArrSrc,allArrName);	
	}

	seeMoreComment(){
		if(this.state.commentHeight === 'auto'){
			this.state.commentHeight = this.defaultHeight;
			this.state.defaultCommentState = '查看更多';

		}else{
			this.state.commentHeight = 'auto';
			
			this.state.defaultCommentState = '收起更多';
		}
		this.forceUpdate();
		setTimeout(()=>{
			this.mainScroll && this.mainScroll.refresh();//刷新滚动条
		},100);
	}

	seeMoreDetailDescribe(){
			if(this.state.detailDescribe === this.defaultDetailDescribe){
					this.state.detailDescribe = this.state.detailDescribe.substring(0,130)+'...';
					this.state.defaultDetailDescribeState = '查看更多';
					
			}else{
				this.state.detailDescribe = this.defaultDetailDescribe;
				this.state.defaultDetailDescribeState = '收起更多';
			}
			this.forceUpdate();
			setTimeout(()=>{
				this.mainScroll &&  this.mainScroll.refresh();//刷新滚动条
			},100);

			
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

		this.fieldId = id;
		var phone = -1;
		if(window.H5Manager){
			phone  = H5Manager.getUserID();
		}
		var params = {
			place_id:id
		}
		phone*1 !== -1 && (params.phone = phone);
		$.ajax({
			url:window.baseUrl + '/get_place_detail',
			data:params,
			success(data){
					if(data.code === 200){

							var result = data.result;
							s.state.describeSrc = result.describeSrc;
							s.state.describeFull = result.describeFull;
							s.state.title = result.title;
							s.state.cate = result.cate;
							s.state.isCollect = result.isCollect;
							s.state.addressObj = result.addressObj;
							s.state.detailDescribe = result.detailDescribe;
							s.state.commentList = result.commentList;
							s.state.fieldPicList = result.fieldPicList;
							s.fieldPicList = result.fieldPicList.concat([]);
							window.s =s;

							s.state.fieldActive = result.fieldActive;
							if(!result.fieldActive.activeList){
								s.state.fieldActive.activeList = [];
							}


							s.state.fieldParams = result.fieldParams;
							s.fieldParamsArr = result.fieldParams.concat([]);
							s.state.sameFeildList = result.similarPlace;
							s.forceUpdate();
							setTimeout(()=>{
								s.mainScroll = new IScroll(s.refs['scroll'],{
									preventDefault:false
								});

								s.state.scroll = s.mainScroll;
								s.forceUpdate()

								s.fieldPicScroll = new IScroll(s.refs['wc-field-pic-scroll'],{
									scrollX:true,
									scrollY:false,
									preventDefault:false
								});
								if(s.refs['wc-field-active-scroll']){
									s.fieldActiveScroll = new IScroll(s.refs['wc-field-active-scroll'],{
										scrollX:true,
										scrollY:false,
										preventDefault:false
									});	
								}
								
								s.sameFeildScroll = new IScroll(s.refs['wc-feild-same-scroll'],{
									scrollX:true,
									scrollY:false,
									preventDefault:false
								});

								
				  		},500);

					  		s.defaultDetailDescribe = s.state.detailDescribe;

								s.state.detailDescribe = s.state.detailDescribe.substring(0,130)+'...';


								s.defaultHeight = 0 ;
								$('.wc-field-comment-list li').each((i,n)=>{
									if(i<=2){
										s.defaultHeight+=$(n).height()+ 10;
									}
								});
								s.state.commentHeight = s.defaultHeight;
								s.forceUpdate(()=>{
									s.filterLoadingImg(s.state);
									if(window.H5Manager){
										H5Manager.loadFinish && H5Manager.loadFinish();
									}
									
								});

								loading(s.loadingImg,null,()=>{
									s.mainScroll && s.mainScroll.refresh();
								});
						
					} 
			}
		})

		
	}

	filterLoadingImg(data){
		this.loadingImg = this.loadingImg || [];
		for(var attr in data){
			if(typeof data[attr] === 'object'){
				this.filterLoadingImg(data[attr]);
			}else{
				if(typeof data[attr] === 'string' && data[attr].split('.').length>1){
					var suffix = data[attr].split('.')[data[attr].split('.').length-1];
					
					if(suffix === 'jpg'||suffix === 'png'||suffix === 'gif'||suffix === 'jpeg'){
						var add =true;
						this.loadingImg.forEach((item,i)=>{
							if(item === data[attr]){
								add = false;
							}
						});
						add && this.loadingImg.push(data[attr]);
					}
				}
			}
		}
	}
}
export default WCPubCom(FieldApp);

