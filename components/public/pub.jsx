import React, { Component } from 'react';

import { browserHistory } from 'react-router'



export let WCPubCom = ComponsedComponent => class extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	 
	componentWillMount() {
	
	}

	render() {


		let methods = {
		 	
			//fillFeilds:this.fillFeilds
		}

		return <ComponsedComponent {...methods} {...this.props} {...this.state} />;
	}
}

