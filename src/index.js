import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {Router,hashHistory} from 'react-router';
import promise from 'redux-promise';
import routes from './routes';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDom.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  ,document.querySelector('.container'));
