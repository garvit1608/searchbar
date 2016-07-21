import React from 'react';

class MemoizedResultRow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.data)
		return (
			<div>
				{this.props.data}
			</div>
		)
	}
}

export default MemoizedResultRow;