import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './modules';
import {configureStore} from '@reduxjs/toolkit';

// const store = createStore(
// 	rootReducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 	window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const store = configureStore({reducer: rootReducer});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
