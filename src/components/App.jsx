import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: "bjyramos",
			userData: [],
			userRepos: [],
			perPage: 5
		}

	}

	// Get user data from github
	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
			
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
			});
	}

	// Get user data from github
	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userRepos: data});
				
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
			});
	}
	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}

	render(){
		return(
			<div>
				<Profile {...this.state} />
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