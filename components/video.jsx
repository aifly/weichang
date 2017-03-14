import React, { Component } from 'react';
import {WCPubCom} from '../components/public/pub.jsx';
import IScroll from 'iscroll';
import './css/video.css';

class VideoChildApp extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
        this.viewW = document.documentElement.clientWidth;
        this.viewH = document.documentElement.clientHeight;
    }
    render() {

        var  posterStyle = {
            width:this.viewW,
            height:this.viewW * this.props.scale,
            background:'url('+this.props.videoObj.poster+') no-repeat center center',
            backgroundSize:'cover'
        }
        console.log(this.props.videoObj.videoSrc)
        return (
            <div className="wc-video-child-main-ui">
                <div className="wc-video-poster" id={this.props.container}  onTouchTap={this.props.startPlay} style={posterStyle} >
                    {this.props.videoObj.isVr*1 && <img src="./assets/images/vr.png"/>}
                    {/*<video ref='video' width={this.viewW} height={this.viewW * this.props.scale} style={{position:'absolute',left:0,zIndex:10,opacity:this.props.videoShow?1:0,background:'#000'}} controls  >
                        <source src={this.props.videoObj.videoSrc}/>
                    </video>*/}
                </div>
                <div className="wc-video-title-C">
                    <div className="wc-video-title-item">
                        <h3>{this.props.videoObj.title}</h3>
                        <div className="wc-video-cate">{this.props.videoObj.cate} | <span> <span>{this.props.videoObj.time}</span> <img
                            src="./assets/images/heart.png" alt=""/></span> <span>{this.props.videoObj.collect}</span></div>
                    </div>
                    <div className='wc-video-from wc-video-title-item'>
                        <div className='wc-from-logo' style={{background:'url(./assets/images/logo-bg.png) no-repeat center center',backgroundSize:'contain'}}>
                            <section><img src={this.props.videoObj.from.src}/></section>
                        </div>
                        <div>
                            {this.props.videoObj.from.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    componentDidMount(){
           /*播放器参数配置*/
       

    }
}
VideoChildApp.defaultProps ={
    scale:3/4
}
export default WCPubCom(VideoChildApp);

