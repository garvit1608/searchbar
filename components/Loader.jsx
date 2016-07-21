import React from 'react';

class Loader extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span style={{display: this.props.show ? 'initial' : 'none'}}>
					<img src={'../img/default.gif'} style={{height: 70, width: 70}}/>
				</span>
			</div>
		)
	}
}


export default Loader;