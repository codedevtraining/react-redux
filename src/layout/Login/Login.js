import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Button as={Link} to='/dashboard' >Dashboard</Button>
    </div>
  );
};

export default Login;