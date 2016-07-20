import $ from 'jquery';
import {
	GET_RESULT
} from './actionTypes.js';

export const getSearchResult = (dispatch, q) => {
	$('#loading').show();
  $.ajax({
      method: "GET",
      url: "https://api.github.com/search/users?q="+q,
      dataType: "json",
      success: (data) => {
      	$('#loading').hide();
      	return dispatch({type: GET_RESULT, data: data});
      },
      error: () => {
      	$('#loading').hide();
      }
    });
};

export default {
	getSearchResult
};
