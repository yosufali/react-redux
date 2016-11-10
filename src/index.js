import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // Webpack can also import css files :)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); // creates an instance of our store, without passing an initialState. Helps with server rendered apps.

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
