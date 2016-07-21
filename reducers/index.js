import {
	GET_RESULT,
	RESET_RESULT
} from '../actions/actionTypes.js';

export default {

	getSearchResults: (state = {} , action) => {
		// console.log(action.data)
		switch ( action.type ) {
			case GET_RESULT:
				var obj = Object.assign({}, state);
				obj.searchResults = action.data.items;
				// console.log(action.data.items);
				return { searchResults: obj.searchResults };
			case RESET_RESULT:
				return { searchResults: [] };
			default: 
				return state;
		}
	}

};