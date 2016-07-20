
export const getSearchResult = (dispatch) => {
  $.ajax({
      method: "GET",
      url: "/api/data",
      dataType: "json"
    }).success(function(data){
      return dispatch({type:'GET_BOOK', data: data});
    });
};

export default {
	getSearchResult
};