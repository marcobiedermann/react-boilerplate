import React from 'react';
import useAuth from '../hooks/auth';
import Link from '../Link';

function AuthStatus(): JSX.Element {
  const { user } = useAuth();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <p>Welcome {user.username}</p>
      <p>
        <Link to="/logout">Sign out</Link>
      </p>
    </div>
  );
}

export default AuthStatus;
