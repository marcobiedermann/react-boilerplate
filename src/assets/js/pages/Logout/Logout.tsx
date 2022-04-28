import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../components/hooks/auth';

function LogoutPage(): JSX.Element {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    signOut(() => {
      navigate('/');
    });
  }, []);

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
}

export default LogoutPage;
