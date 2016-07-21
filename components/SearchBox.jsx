import React from 'react';
import $ from 'jquery';
import * as _ from 'underscore';
import Loader from './Loader.jsx';
import SearchResult from './SearchResult.jsx';
import { PAGE_COUNT } from '../actions/actionTypes.js';

const TIME_INTERVAl = 3000;

class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			memoizeResults: []
		}
		this.typingTimer;
		this.doneTypingInterval = TIME_INTERVAl;
		this.getNextPage = this.getNextPage.bind(this);
		this.setSearchText = this.setSearchText.bind(this);
		this.setSearchBoxValue = this.setSearchBoxValue.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(_.isEmpty(nextProps.searchResults)) {
			this.setState({
				memoizeResults: []
			});
		}
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
		this.props.getSearchResults(q, this.props.pageCount);
		this.setState({ isLoading: false });
	}

	getNextPage() {
		var searchText = $('#searchTextBox').val();
		if(!_.isEmpty(searchText)) {
			this.props.getSearchResults(searchText, this.props.pageCount, true);
		}
	}

	setSearchText(e) {
		var input = e.target;
		clearTimeout(this.typingTimer);
		this.typingTimer = setTimeout(this.getSearchResults.bind(this, e.target.value, this.props.pageCount), this.doneTypingInterval);

		this.setState({ 
			isLoading: true, 
			memoizeResults: this.getMemoizedResults(e.target.value)
		});
	}

	setSearchBoxValue(value) {
		$('#searchTextBox').val(value).trigger('change');
	}

	render () {
		return (
			<div>
				<div>
					<input type="text" placeholder="enter search text" onChange={this.setSearchText} style={{float: 'left'}} id="searchTextBox" />
					<button onClick={this.getNextPage} > Next </button>
					<Loader show={this.state.isLoading} />
				</div>
				<SearchResult 
					data={this.state.memoizeResults}
					setSearchBoxValue={this.setSearchBoxValue}
				/>
			</div>
		)
	}
}

export default SearchBox;
