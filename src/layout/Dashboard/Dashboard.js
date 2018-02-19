import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'; 

import Navbar from '../../components/Navbar';
import About from './Scenes/About/About';
import Todo from './Scenes/Todo/Todo';

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <Switch>
          <Route exact path='/dashboard/todos' component={Todo}/>
          <Route exact path='/dashboard/about' component={About}/>
          <Redirect from='*' to='/dashboard/todos'/>
        </Switch>
      </Container>
    </div>
  );
};

export default Dashboard;