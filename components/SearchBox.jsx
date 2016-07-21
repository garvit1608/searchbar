import React from 'react';
import $ from 'jquery';
import * as _ from 'underscore';
import Loader from './Loader.jsx';

class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
		// this.getSearchResults = this.getSearchResults.bind(this);
	}

	componentDidMount() {
		var typingTimer;
		var doneTypingInterval = 3000;
		var input = $('#searchTextBox');

		//on keyup, start the countdown
		input.on('keyup', (e) => {
		  clearTimeout(typingTimer);
		  typingTimer = setTimeout(this.getSearchResults.bind(this, e.target.value), doneTypingInterval);
		});

		//on keydown, clear the countdown 
		input.on('keydown', (e) => {
			this.setState({ isLoading: true });
		  clearTimeout(typingTimer);
		});

		// this.attachAutoComplete();
	}

	// attachAutoComplete() {
	// 	  $( function() {
 //    var availableTags = [
 //      "ActionScript",
 //      "AppleScript",
 //      "Asp",
 //      "BASIC",
 //      "C",
 //      "C++",
 //      "Clojure",
 //      "COBOL",
 //      "ColdFusion",
 //      "Erlang",
 //      "Fortran",
 //      "Groovy",
 //      "Haskell",
 //      "Java",
 //      "JavaScript",
 //      "Lisp",
 //      "Perl",
 //      "PHP",
 //      "Python",
 //      "Ruby",
 //      "Scala",
 //      "Scheme"
 //    ];
 //    $( "#tags" ).autocomplete({
 //      source: availableTags
 //    });
 //  } );
	// }

	// setTimer(e) {
	// 	var timer = e.target.keyup(_.debounce(doSomething , 500));
	// }

	getPastSearches() {
		return JSON.parse(localStorage.getItem('pastSearches'));
	}

	pushQuerytoLocalStorage(q) {
		var array = this.getPastSearches() || [];
		console.log(this.getPastSearches);
		array.push(q);
		localStorage.setItem('pastSearches', JSON.stringify(array));
	}

	getSearchResults(q) {
		var pastSearches = this.getPastSearches();
		if(pastSearches) {
			var memoizeResults = _.filter(pastSearches, (e) => e.match(q));
			console.log(memoizeResults);
			if(_.isEmpty(memoizeResults)) {
				this.pushQuerytoLocalStorage(q);
			}
		}
		else {
			this.pushQuerytoLocalStorage(q);
		}
		this.props.getSearchResults(q);
		this.setState({ isLoading: false });
	}

	render () {
		return (
			<div>
				<input type="text" id="searchTextBox" />
				<Loader show={this.state.isLoading} />
				<div id="memoizedResults" />
			</div>
		)
	}
}

export default SearchBox;
