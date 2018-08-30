import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faUser, faSignOutAlt, faAt } from '@fortawesome/free-solid-svg-icons';

import Home from '~components/Home';

import Game from '~components/Game';

import TrainingHtml from '~components/Maquetado';

import { store } from './redux/store';
import AuthorizedRoute from './util/AuthorizedRoute';
import UnauthorizedLayout from './util/UnauthorizedLayout';

import './scss/index.scss';
import './scss/aplication.scss';

library.add(faSpinner, faUser, faSignOutAlt, faAt);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UnauthorizedLayout} />
        <AuthorizedRoute path="/app/tic-tac" component={Game} />
        <AuthorizedRoute path="/app/training-html" component={TrainingHtml} />
        <AuthorizedRoute path="/app" component={Home} />
        <Redirect to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);