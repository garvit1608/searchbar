import React from 'react';
import $ from 'jquery';
import Loader from './Loader.jsx';

class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
		this.getSearchResults = this.getSearchResults.bind(this);
	}

	componentDidMount() {
		var typingTimer;                
		var doneTypingInterval = 2000; 
		var input = $('#searchTextBox');

		//on keyup, start the countdown
		input.on('keyup', () => {
		  clearTimeout(typingTimer);
		  typingTimer = setTimeout(this.getSearchResults, doneTypingInterval);
		});

		//on keydown, clear the countdown 
		input.on('keydown', () => {
			this.setState({ isLoading: true });
		  clearTimeout(typingTimer);
		});
	}

	getSearchResults() {
		var val = $('#searchTextBox').val();
		this.props.getSearchResults(val);
		this.setState({ isLoading: false });
	}

	render () {
		return (
			<div>
				<input type="text" id="searchTextBox"/>
				<Loader show={this.state.isLoading} />  
			</div>
		)
	}
}

export default SearchBox;