import {
	GET_RESULT,
	RESET_RESULT
} from '../actions/actionTypes.js';

export default {

	getSearchResults: (state = [] , action) => {
		console.log(action.data)
		switch ( action.type ) {
			case GET_RESULT:
				console.log(action.data.items);
				return 	action.data.items;
			case RESET_RESULT:
				return [];
			default: 
				return state;
		}
	},

	getMemoizedResults: (state = null, action) => {
		switch( action.type ) {
			case "GET_RESUL":
				return action.payload;
			default:
				return state;
		}
	}
};