import $ from 'jquery';
import {
	GET_RESULT,
  RESET_RESULT,
  PAGE_COUNT
} from './actionTypes.js';



export const getSearchResult = (dispatch, q, page, incPageCount) => {
  if(incPageCount) {
    page = page + 1;
  }
  $.ajax({
      method: "GET",
      url: "https://api.github.com/search/users?q="+q+"&per_page=5&page="+page,
      dataType: "json",
      success: (data) => {
      	return dispatch({ type: GET_RESULT, data: data, pageCount: page });
      },
      error: () => {
      	console.log('error');
        dispatch({ type: RESET_RESULT, data: {}, pageCount: PAGE_COUNT });
      }
    });
};



export default {
	getSearchResult
};
