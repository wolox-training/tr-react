import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '~components/Login';

const UnauthorizedLayout = () => (
  <Switch>
    <Route path="/auth/login" component={Login} />
    <Redirect to="/auth/login" />
  </Switch>
);

export default UnauthorizedLayout;
