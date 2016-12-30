import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/app';
import './index.css'
import store from './store';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);