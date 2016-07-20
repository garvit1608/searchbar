import React from 'react';

class Loader extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span style={{display: this.props.show ? 'initial' : 'none'}}>Loading</span>
			</div>
		)
	}
}


export default Loader;