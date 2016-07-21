import $ from 'jquery';
import {
	GET_RESULT,
  RESET_RESULT
} from './actionTypes.js';

export const getSearchResult = (dispatch, q) => {
  $.ajax({
      method: "GET",
      url: "https://api.github.com/search/users?q="+q,
      dataType: "json",
      success: (data) => {
      	return dispatch({ type: GET_RESULT, data: data });
      },
      error: () => {
      	console.log('error');
        dispatch({ type: RESET_RESULT, data: {} });
      }
    });
};

export default {
	getSearchResult
};
