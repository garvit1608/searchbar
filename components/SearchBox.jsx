import React from 'react';
import $ from 'jquery';
import * as _ from 'underscore';
import Loader from './Loader.jsx';

class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			memoizeResults: []
		}
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
			// console.log(this.getMemoizedResults());
			this.setState({ 
				isLoading: true, 
				memoizeResults: this.getMemoizedResults(e.target.value)
			});
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

	getMemoizedResults(q) {
		var pastSearches = this.getPastSearches();
		// console.log( _.filter(pastSearches, (e) => e.match(q)));
		return pastSearches ? _.filter(pastSearches, (e) => e.match(q)) : [];
	}

	getPastSearches() {
		return JSON.parse(localStorage.getItem('pastSearches'));
	}

	pushQuerytoLocalStorage(q) {
		var array = this.getPastSearches() || [];
		array.push(q);
		localStorage.setItem('pastSearches', JSON.stringify(array));
	}

	getSearchResults(q) {
		this.props.getSearchResults(q);
		// console.log(this.props.searchResults);
		var pastSearches = this.getPastSearches();
		if(pastSearches) {
			var memoizeResults = this.getMemoizedResults(q);
			if(_.isEmpty(memoizeResults)) {
				this.pushQuerytoLocalStorage(q);
			}
		}
		else {
			this.pushQuerytoLocalStorage(q);
		}
		this.setState({ isLoading: false });
	}

	render () {
		return (
			<div>
				<input type="text" id="searchTextBox" />
				<Loader show={this.state.isLoading} />
			</div>
		)
	}
}

export default SearchBox;
