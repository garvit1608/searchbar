import {
	GET_RESULT
} from '../actions/actionTypes.js';

export default {

	getSearchResults: (state = [] , action) => {
		switch ( action.type ) {
			case GET_RESULT:
				debugger;
				return 	state.concat([action.payload])
			default: 
				return state;
		}
	},

	setActiveEmail: (state = null, action) => {
		switch( action.type ) {
			case GET_RESULT:
				return action.payload;
			default:
				return state;
		}
	},

}