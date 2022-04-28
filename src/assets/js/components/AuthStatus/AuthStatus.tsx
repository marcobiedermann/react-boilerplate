import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

function AuthStatus(): JSX.Element {
  const { user } = useAuth();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <p>Welcome {user.username}!</p>
      <p>
        <Link to="/logout">Sign out</Link>
      </p>
    </div>
  );
}

export default AuthStatus;
