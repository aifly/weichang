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
            background:'url('+this.props.poster+') no-repeat center center',
            backgroundSize:'cover'
        }
        return (
            <div className="wc-video-child-main-ui">
                <div className="wc-video-poster"  onTouchTap={this.props.startPlay} style={posterStyle} >
                    {this.props.isVr && <img src="./assets/images/vr.png"/>}
                    <video ref='video' width={this.viewW} height={this.viewW * this.props.scale} style={{position:'absolute',zIndex:10,opacity:this.props.videoShow?1:0,background:'#000'}} controls  >
                        <source src={this.props.videoSrc}/>
                    </video>
                </div>
                <div className="wc-video-title-C">
                    <div className="wc-video-title-item">
                        <h3>{this.props.title}</h3>
                        <div className="wc-video-cate">{this.props.cate} | <span> <span>{this.props.time}</span> <img
                            src="./assets/images/heart.png" alt=""/></span> <span>{this.props.collect}</span></div>
                    </div>
                    <div className='wc-video-from wc-video-title-item'>
                        <div><img src={this.props.from.src}/></div>
                        <div>
                            {this.props.from.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){

     

    }
}
VideoChildApp.defaultProps ={
    scale:3/4
}
export default WCPubCom(VideoChildApp);

