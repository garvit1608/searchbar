import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import search from './reducers/index.js';
import App from './App.jsx';

const initialState = {
	searchResults: []
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