import React, { Component } from 'react';

import { browserHistory } from 'react-router'



export let WCPubCom = ComponsedComponent => class extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	 
	componentWillMount() {
	
	}

	getQueryString(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
   	}

   	switchPlatform(){
   		if (/(iPhone|iPad|iPod|iOS)/ig.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
		    //alert(navigator.userAgent);  
		    return 'ios';
		} else if (/(Android)/i.test(navigator.userAgent)) {   //判断Android
		    //alert(navigator.userAgent); 
		    return 'android';
		} else {  //pc
		    return 'pc';
		};
   	}

	render() {

		let methods = {
		 	getQueryString:this.getQueryString,
		 	switchPlatform:this.switchPlatform,
			//fillFeilds:this.fillFeilds
		}

		return <ComponsedComponent {...methods} {...this.props} {...this.state} />;
	}
}

