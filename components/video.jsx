import React, { Component } from 'react';
import {WCPubCom} from '../components/public/pub.jsx';
import IScroll from 'iscroll';
import './css/video.css';

class VideoChildApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showFullscreen:false,
            playBtnShow:'',

        };
        this.viewW = document.documentElement.clientWidth;
        this.viewH = document.documentElement.clientHeight;
    }
    render() {

        var  posterStyle = {
            width:this.viewW,
            height:this.viewW * this.props.scale
        }
        if(this.props.videoObj.poster){
            posterStyle.background='url('+this.props.videoObj.poster+') no-repeat center center / cover';
        }




        return (
            <div className="wc-video-child-main-ui">
                <div className={"wc-video-poster "+ this.state.playBtnShow } onTouchTap={()=>{this.props.container!=='live-video' && this.props.startPlay()}} id={this.props.container} style={posterStyle} >
                    {this.props.videoObj.isVr*1 === 1  && <img src="./assets/images/vr.png"/>}
                    {/*<video ref='video' width={this.viewW} height={this.viewW * this.props.scale} style={{position:'absolute',left:0,zIndex:10,opacity:this.props.videoShow?1:0,background:'#000'}} controls  >
                        <source src={this.props.videoObj.videoSrc}/>
                    </video>*/}
                    {this.props.container==='live-video'  && this.props.videoObj.isVr*1 === 1 && <iframe  onLoad={()=>{this.setState({playBtnShow:'active'});setTimeout(()=>{this.setState({showFullscreen:true})},4000)}} width={this.viewW} height={this.viewW*this.props.scale} frameBorder={0} src={window.liveSrc+this.props.videoObj.videoSrc}></iframe>}

                    {this.state.showFullscreen &&  <div className='lt-viode-toolbar'><img src='./assets/images/fullscreen.png'   onTouchTap={()=>{this.props.startPlay()}}/></div>}
                    {this.props.videoObj.isVr*1 === 0 && this.props.videoObj.videoSrc  && this.props.container ==='live-video' && <video autoPlay ref='video' width={this.viewW} height={this.viewW * this.props.scale} style={{position:'absolute',left:0,zIndex:10,opacity:this.props.videoShow?1:0,background:'#000'}}  >
                        <source src={this.props.videoObj.videoSrc} type="application/vnd.apple.mpegurl"/>
                    </video> }

                    {this.props.videoObj.isVr*1 === 0 && this.props.videoObj.videoSrc  && this.props.container !=='live-video' && <video  ref='video' width={this.viewW} height={this.viewW * this.props.scale} style={{position:'absolute',left:0,zIndex:10,display:this.props.videoShow?'block':'none',background:'#000'}}  >
                        <source src={this.props.videoObj.videoSrc} type='video/mp4'/>
                    </video> }

                    {this.props.videoObj.isVr*1 === 0  && this.props.container ==='live-video' && <div className='wc-live-full' onTouchTap={this.showVideo.bind(this)}></div>}

                </div>
                <div className="wc-video-title-C">
                    <div className="wc-video-title-item">
                        <h3>{this.props.videoObj.title}</h3>
                        <div className="wc-video-cate">{this.props.videoObj.cate} | <span> <span>{this.props.videoObj.time}</span>  {this.state.isZan?<img onTouchTap={this.dianzan.bind(this)}
                                    src="./assets/images/heart1.png" alt=""/>:<img
                                    onTouchTap={this.dianzan.bind(this)} src="./assets/images/heart.png" alt=""/>}</span> <span>{this.props.videoObj.follow}</span></div>
                    </div>
                    <div className='wc-video-from wc-video-title-item' onTouchTap={this.playLive.bind(this)}>
                        <div className='wc-from-logo' >
                            {this.props.videoObj.from.src && <section style={{background:'#fff url('+this.props.videoObj.from.src+') no-repeat center center / cover'}}><img src={'./assets/images/logo-bg.png'}/></section>}
                        </div>
                        <div>
                            {this.props.videoObj.from.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    showVideo(){
         H5Manager.showVideo(this.props.videoObj.title,this.props.videoObj.videoSrc,1,this.props.videoObj.isVr*1);
    }

    playLive(){
       
    }

    dianzan(){//点赞
        
        if(this.update){
            this.update = false;
            window.obserable.trigger({
                type:'updateCollect'
            });
            this.setState({
                isZan:true
            })
            setTimeout(()=>{
                this.update = true;
            },1000);
        }
        
    }
    componentDidMount(){
           /*播放器参数配置*/
       this.update = true;
       
    }
}
VideoChildApp.defaultProps ={
    scale:3/4
}
export default WCPubCom(VideoChildApp);

