import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth';

function RequireAuth(): JSX.Element {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return <Outlet />;
}

export default RequireAuth;
