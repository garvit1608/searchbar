import React from 'react';

class SearchResultRow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.data)
		return (
			<div>
				<div>
					<img src={this.props.data.avatar_url} style={{ height: 100, width: 100 }} />
					<h5>{this.props.data.login}</h5>
				</div>
			</div>
		)
	}
}

export default SearchResultRow;