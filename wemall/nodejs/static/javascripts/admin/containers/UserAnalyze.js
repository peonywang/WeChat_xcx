import React, { Component } from 'react';
import { connect }          from 'react-redux';
import config               from '../config';
import requestUserAnalyze   from '../actions/requestUserAnalyze';

class UserAnalyze extends Component {
	constructor(props) {
        super(props);
        this.state = {};
    }
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(requestUserAnalyze());
	}
  	render() {
		const { dispatch, userAnalyze } = this.props;
	    return (
	    	<div className="main-box">
	        	<div>{userAnalyze.todayNewUser}</div>
	        	<div>{userAnalyze.yesterdayNewUser}</div>
	        </div>
	    )
	}
}

function mapStateToProps(state) {
    return {
        userAnalyze: state.userAnalyze
    };
}

export default connect(mapStateToProps)(UserAnalyze);