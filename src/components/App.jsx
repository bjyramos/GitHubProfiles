import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: "bjornjohnramos",
			userData: [],
			userRepos: [],
			perPage: 5
		}

	}
	render(){
		return(
			<div>
				{this.state.username}
			</div>
			)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps = {
	clientId: 'a8391c188a34a4026da1',
	clientSecret: '28beb6dedf248634cebb2ca6b012a9bf016383c2'
}

export default App