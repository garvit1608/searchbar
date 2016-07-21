import {
	GET_RESULT,
	RESET_RESULT
} from '../actions/actionTypes.js';

export default {

	getSearchResults: (state = {} , action) => {
		console.log(action);
		switch ( action.type ) {
			case GET_RESULT:
				var obj = Object.assign({}, state);
				obj.searchResults = action.data.items;
				return { searchResults: obj.searchResults, pageCount: action.pageCount };
			case RESET_RESULT:
				return { searchResults: [], pageCount: action.pageCount };
			default: 
				return state;
		}
	}

};