import { connect } from 'react-redux';
import Actions from '../actions/actions.js';
import InstantSearchContainer from '../components/InstantSearchContainer.jsx';

const mapStateToProps = state => {
	return {
		searchResults: state.searchResults
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getSearchResults: (q) => dispatch(Actions.getSearchResult(q))
	}
}

const MainContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(InstantSearchContainer);

export default MainContainer;