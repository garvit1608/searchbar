import React from 'react';
import SearchBox from './SearchBox.jsx';
import SearchResult from './SearchResult.jsx';

class InstantSearchContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<SearchBox
					getSearchResults={this.props.getSearchResults}
					searchResults={this.props.searchResults}
					pageCount={this.props.pageCount}
				/>
				<SearchResult searchResults={this.props.searchResults} />
			</div>
		)
	}
}

export default InstantSearchContainer;