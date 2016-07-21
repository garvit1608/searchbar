import React from 'react';
import $ from 'jquery';
import * as _ from 'underscore';
import Loader from './Loader.jsx';
import SearchResult from './SearchResult.jsx';

const PAGE_COUNT = 1;
const TIME_INTERVAl = 3000;

class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			memoizeResults: [],
			pageCount: PAGE_COUNT
		}
		this.typingTimer;
		this.doneTypingInterval = TIME_INTERVAl;
		this.setPageCount = this.setPageCount.bind(this);
		this.setSearchText = this.setSearchText.bind(this);
	}

	componentDidMount() {
		//on keyup, start the countdown
		// input.on('keyup', (e) => {
		//   clearTimeout(typingTimer);
		//   typingTimer = setTimeout(this.getSearchResults.bind(this, e.target.value), doneTypingInterval);
		// });

		//on keydown, clear the countdown 
		// input.on('keydown', (e) => {
		// 	if(e.keyCode != 9) { 
		// 		this.setState({ 
		// 			isLoading: true, 
		// 			memoizeResults: this.getMemoizedResults(e.target.value)
		// 		});
		//   clearTimeout(typingTimer);
		// 	}
		// });

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
	componentWillReceiveProps(nextProps) {
		if(_.isEmpty(nextProps.searchResults)) {
			this.setState({
				memoizeResults: [],
				pageCount: PAGE_COUNT
			});
		}
	}

	componentDidUpdate(prevState) {
		// if(nextState.pageCount === this.state.pageCount + 1) {
		// 	var searchText = $('#searchTextBox').val();
		// 	this.props.getSearchResults(searchText, nextState.pageCount);
		// }
	}

	getMemoizedResults(q) {
		var pastSearches = this.getPastSearches();
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
		this.props.getSearchResults(q, this.state.pageCount);
		this.setState({ isLoading: false });
	}

	setPageCount() {
		console.log(this.state.pageCount);
		this.setState({
			pageCount: this.state.pageCount + 1
		});
	}

	setSearchText(e) {
		var input = e.target;
		clearTimeout(this.typingTimer);
		this.typingTimer = setTimeout(this.getSearchResults.bind(this, e.target.value), 
									this.doneTypingInterval);

		this.setState({ 
			isLoading: true, 
			memoizeResults: this.getMemoizedResults(e.target.value)
		});

	}

	render () {
		return (
			<div>
				<div>
					<input type="text" placeholder="enter search text" onChange={this.setSearchText} style={{float: 'left'}}/>
					<button onClick={this.setPageCount} > Next </button>
					<Loader show={this.state.isLoading} />
				</div>
				<SearchResult data={this.state.memoizeResults} />
			</div>
		)
	}
}

export default SearchBox;
