import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import search from './reducers/index.js';
import App from './App.jsx';
import { PAGE_COUNT }from './actions/actionTypes.js';

const initialState = {
	searchResults: [],
	pageCount: PAGE_COUNT
}

// const reducers = combineReducers({
// 	searchResults: search.getSearchResults,
// 	memoizedResults: search.getMemoizedResults
// });

let store = createStore(search.getSearchResults,	initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)