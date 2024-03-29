import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import storeFactory from './store/index'
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'


const store = storeFactory(false, window.__INITIAL_STATE__)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));



