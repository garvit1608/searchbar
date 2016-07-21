import React from 'react';
import SearchResultRow from './SearchResultRow.jsx';

class SearchResult extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.searchResults);
		return (
			<div>
				{
					this.props.searchResults.map( (row) => {
						return <SearchResultRow data={row} />
					})
				}
			</div>
		)
	}
}

export default SearchResult;