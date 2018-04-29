import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';
import './index.css';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('network-audit-app')
);
