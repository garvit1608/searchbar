import React from 'react';
import SearchBox from './SearchBox.jsx';
import SearchResult from './SearchResult.jsx';

class InstantSearchContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<SearchBox
					getSearchResults={this.props.getSearchResults}
				/>
				<SearchResult searchResults={this.props.searchResults} />
			</div>
		)
	}
}

export default InstantSearchContainer;