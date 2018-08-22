import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '~components/Login';

import Game from '~components/Game';

import { store } from './redux/store';

import './scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/" component={Game} />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
