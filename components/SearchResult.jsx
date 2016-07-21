import React from 'react';
import SearchResultRow from './SearchResultRow.jsx';

class SearchResult extends React.Component {

	constructor(props) {
		super(props);
		this.getValidComponent();
	}

	getValidComponent() {
		if(this.props.searchResults) {
			this.rowComponent = <SearchResultRow data={row} />;
			this.data = this.props.searchResults;
		} else if(this.props.data) {
			this.rowComponent = <SearchResultRow data={row}/>
			this.data = this.props.data;
		}
	}

	render() {
		// console.log(this.props.searchResults);
		return (
			<div>
				{
					this.data.map( (row) => {
						return this.rowComponent
					})
				}
			</div>
		)
	}
}

export default SearchResult;