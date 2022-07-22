import Error from '../../components/Error';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Seo from '../../components/Seo';
import { useUsers } from '../../hooks/user';

function UsersPage() {
  const { isLoading, isError, error, data: users } = useUsers();

  if (isLoading) {
    <Loader />;
  }

  if (isError) {
    <Error {...error} />;
  }

  return (
    <>
      <Seo title="Users" />
      <h1>Users</h1>
      {users?.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
      <Link to="/users/new">New User</Link>
    </>
  );
}

export default UsersPage;
