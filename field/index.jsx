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

			 defaultDetailDescribeState:'查看更多',
			 defaultCommentState:'查看更多',
			 commentHeight:'auto',


			 describeSrc:'',
			 title:'798艺术区约美术馆',
			 cate:'艺术区',
			 addressObj:{
			 		address:'[朝阳区 燕莎]酒仙桥路4号',
			 		longitude:'',//经度
			 		latitude:'',//纬度
				 	collect:'2341万',
			 		tel:'15718879215'//电话
			 },
			 detailDescribe:'这里的展览从来不会让挑剔的观众失望，什么样的艺术大师都来过。新馆是2008年10月新建的，地处偏远，但来的人很多。整个建筑设计得非常有特色，展示的空间布局合理，移步换景。由建筑师矶崎新设计，据说设计费每平米达700。',
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
			 		{
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
			 		}
			 ],
			 fieldActive:{
				 	activePic:'./assets/images/active.jpg',
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
				 	]
			 },
			 sameFeildList:[
				 {
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
				 }
			 ]
		};
		this.viewW = document.documentElement.clientWidth;
	}	



	render() {
			
			var headerProps = {
				subjectId:this.props.params.subjectId,
				title:this.state.title,
				describe:this.state.detailDescribe,
			};	
		return (
			<div className='wc-field-ui'>
				<WCHeader {...headerProps}></WCHeader>
				<section ref="scroll" className="wc-field-scroll" style={{height:document.documentElement.clientHeight - 64 }}>
					<div style={{border:'1px solid transparent',paddingBottom:10}}>
						<div className='wc-field-describe'>
							{this.state.describeSrc && <iframe height={153} width={this.viewW/10*9.4} src={this.state.describeSrc} frameBorder="0"></iframe>}
						</div>
						<div className='wc-field-title-C'>
							<div className="wc-field-title-item">
								<h3>{this.state.title}</h3>
								<div className="wc-field-cate">{this.state.cate} | <span><img
									src="./assets/images/heart.png" alt=""/></span> <span>{this.state.addressObj.collect}</span></div>
							</div>
							<div className='wc-field-tel wc-field-title-item'>
								<a href={'tel:'+this.state.addressObj.tel}><img src='./assets/images/tel.png'/></a>
							</div>
						</div>
						<div className="wc-field-address" onTouchTap={this.showMap.bind(this)}>
							<img src="./assets/images/pos.png" alt=""/>
							<div>地址：<span className='wc-address' style={{top:window.H5Manager?0:4}}>{this.state.addressObj.address}</span><span className='wc-entry-map'>></span></div>
						</div>
						<div className="wc-field-detail">
							{this.state.detailDescribe}
						</div>
						<div className="wc-field-more" onTouchTap={this.seeMoreDetailDescribe.bind(this)}><span>{this.state.defaultDetailDescribeState}</span></div>
						<div className="wc-field-commit-C">
							<aside>专业提示</aside>
							<aside onTouchTap={this.showComment.bind(this)}><span><img src="./assets/images/commom.png" alt=""/></span>我要评论</aside>
						</div>
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
						{this.state.commentList.length>0 && <div className="wc-field-more" onTouchTap={this.seeMoreComment.bind(this)}><span>{this.state.defaultCommentState}</span></div>}

						<div className="wc-field-commit-C wc-field-params">
							<aside>场地参数</aside>
							<aside></aside>
						</div>
						<table className='wc-field-parameter-table'>
							<thead>
								<tr>
									<th>地址名称</th>
									<th>尺寸(L/W/H)</th>
									<th>面积</th>
									<th>容纳人数</th>
								</tr>
							</thead>
							<tbody>
								{this.state.fieldParams.map((item,i)=>{
									return <tr key={i}>
														<td>{item.name}</td>
														<td>{item.size}</td>
														<td>{item.area}</td>
														<td>{item.personCount}</td>
													</tr>
								})}
							</tbody>
						</table>
						
						<div className="wc-field-commit-C">
							<aside>场地图片</aside>
							<aside></aside>
						</div>

						<div className='wc-field-pic-scroll' ref='wc-field-pic-scroll'>
								<ul className='wc-field-pic-list' style={{width:this.state.fieldPicList.length * (document.documentElement.clientWidth/ 10 * 4+ 10)}}>
										{this.state.fieldPicList.map((item,i)=>{
											return <li onTouchTap={this.showImage.bind(this,i)} key={i}>
													<div><img src={item.src} alt=""/></div>
													<div>{item.name}</div>
											</li>
										})}
								</ul>
						</div>

						<div className="wc-field-commit-C">
							<aside>曾办活动</aside>
							<aside></aside>
						</div>
						<div className="wc-field-active">
							<div className='wc-field-active-img'>
								 <img src={this.state.fieldActive.activePic}/>
							</div>
							<div  className="wc-field-active-scroll" ref='wc-field-active-scroll'>
								{!this.state.fieldActive.activeList && <div></div>}
								{this.state.fieldActive.activeList && <ul  className="wc-field-active-list" style={{width:this.state.fieldActive.activeList.length * (document.documentElement.clientWidth/ 10 * 4+ 10)}}>
									{this.state.fieldActive.activeList.map((item,i)=>{
										return <li key={i}>
											<div><img src={item.src} alt=""/></div>
											<h3>{item.name}</h3>
											<div>{item.date}</div>
										</li>
									})}
								</ul>}
							</div>
						</div>

						<div className="wc-field-commit-C">
							<aside>相似场地</aside>
							<aside></aside>
						</div>

						<div className="wc-feild-same-scroll" ref="wc-feild-same-scroll">
							<ul className="wc-feild-same-list" style={{width:this.state.sameFeildList.length * (document.documentElement.clientWidth/ 10 * 8 + 10)}}>
								{this.state.sameFeildList.map((item,i)=>{
									return <li key={i}>
										<div><img src={item.src} alt=""/></div>
										<h3>{item.title}</h3>
										<div><span>{item.address}</span><span>{item.area}</span><span>最多容纳{item.personCount}人</span></div>
									</li>
								})}
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}



	showComment(){//进入评论页面
		if(window.H5Manager){
			H5Manager.showComment(this.state.title,this.fieldId);
		}
	}

	showMap(){
		if(H5Manager){
			H5Manager.log(this.state.addressObj.latitude+','+this.state.addressObj.longitude)
			window.H5Manager.showMap(this.state.addressObj.longitude,this.state.addressObj.latitude);
		}
	}

	showImage(index){
		if(H5Manager){
			var arr = [];
			this.state.fieldPicList.map((item,i)=>{
					arr.push(item.src);
			});
			H5Manager.showImage(index,arr);	
		}
	}
	seeMoreComment(){
		if(this.state.commentHeight === 'auto'){
			this.state.commentHeight = this.defaultHeight;
			this.state.defaultCommentState = '查看更多';

		}else{
			this.state.commentHeight = 'auto';
			
			this.state.defaultCommentState = '收起';
		}
		this.forceUpdate();
		setTimeout(()=>{
			this.mainScroll.refresh();//刷新滚动条
		},100);
	}

	seeMoreDetailDescribe(){
			if(this.state.detailDescribe === this.defaultDetailDescribe){
					this.state.detailDescribe = this.state.detailDescribe.substring(0,52)+'...';
					this.state.defaultDetailDescribeState = '查看更多';
					
			}else{
				this.state.detailDescribe = this.defaultDetailDescribe;
				this.state.defaultDetailDescribeState = '收起';
			}
			this.forceUpdate();
			setTimeout(()=>{
				this.mainScroll.refresh();//刷新滚动条
			},100);

			
	}
	componentDidMount(){
		var s = this;
		var id = this.props.params.id;

		this.fieldId = id;
		$.ajax({
			url:window.baseUrl + '/get_place_detail',
			data:{
				place_id:id
			},
			success(data){
					if(data.code === 200){

						console.log(data.result)
							var result = data.result;
							s.state.describeSrc = result.describeSrc;
							s.state.title = result.title;
							s.state.cate = result.cate;
							s.state.addressObj = result.addressObj;
							s.state.detailDescribe = result.detailDescribe;
							s.state.commentList = result.commentList;
							s.state.fieldPicList = result.fieldPicList;
							s.state.fieldActive = result.fieldActive;
							s.state.fieldParams = result.fieldParams;
							s.state.sameFeildList = result.similarPlace;
							s.forceUpdate();
							setTimeout(()=>{
								s.mainScroll = new IScroll(s.refs['scroll'],{
									preventDefault:false
								});

								s.fieldPicScroll = new IScroll(s.refs['wc-field-pic-scroll'],{
									scrollX:true,
									scrollY:false,
								});

								s.fieldActiveScroll = new IScroll(s.refs['wc-field-active-scroll'],{
									scrollX:true,
									scrollY:false,
								});
								s.sameFeildScroll = new IScroll(s.refs['wc-feild-same-scroll'],{
									scrollX:true,
									scrollY:false,
								});

								
				  		},500);

					  		s.defaultDetailDescribe = s.state.detailDescribe;

								s.state.detailDescribe = s.state.detailDescribe.substring(0,52)+'...';


								s.defaultHeight = 0 ;
								$('.wc-field-comment-list li').each((i,n)=>{
									if(i<=2){
										s.defaultHeight+=$(n).height()+ 10;
									}
								});
								s.state.commentHeight = s.defaultHeight;
								s.forceUpdate();
						
					} 
			}
		})

		
	}
}
export default WCPubCom(FieldApp);

