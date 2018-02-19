import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Login from './layout/Login/Login'
import Dashboard from './layout/Dashboard/Dashboard';

const RoutesApp = () => (
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/dashboard' component={Dashboard}/>
  </Switch>
);

export default RoutesApp;