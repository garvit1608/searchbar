import React from 'react';

class MemoizedResultRow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h4 onClick={this.props.setSearchBoxValue.bind(this, this.props.data)}> {this.props.data}</h4>
			</div>
		)
	}
}

export default MemoizedResultRow;