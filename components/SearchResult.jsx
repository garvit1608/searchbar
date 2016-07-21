import React from 'react';
import SearchResultRow from './SearchResultRow.jsx';
import MemoizedResultRow from './MemoizedResultRow.jsx';

class SearchResult extends React.Component {

	constructor(props) {
		super(props);
	}

	getValidComponent() {
		if(this.props.searchResults) {
			this.rowComponent = SearchResultRow;
			this.data = this.props.searchResults;
		} else if(this.props.data) {
			this.rowComponent = MemoizedResultRow;
			this.data = this.props.data;
		}
	}

	render() {
		this.getValidComponent();
		return (
			<div>
				{
					this.data.map( (row) => {
						return <this.rowComponent data={row} setSearchBoxValue={this.props.setSearchBoxValue}
						/>
					})
				}
			</div>
		)
	}
}

export default SearchResult;