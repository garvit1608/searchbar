import { connect } from 'react-redux';
import Actions from '../actions/actions.js';
import InstantSearchContainer from '../components/InstantSearchContainer.jsx';

const mapStateToProps = state => {
	return {
		searchResults: state.searchResults,
		pageCount: state.pageCount
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getSearchResults: (q, pageCount) => Actions.getSearchResult(dispatch, q, pageCount)
	}
}

const MainContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(InstantSearchContainer);

export default MainContainer;