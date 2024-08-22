import Error from '../../components/Error';
import Link from '../../components/Link';
import List from '../../components/List';
import Loader from '../../components/Loader';
import Seo from '../../components/Seo';
import { User, useUsers } from '../../hooks/user';

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
      {users?.length && (
        <List<User> items={users}>
          {(user) => <Link to={`/users/${user.id}`}>{user.name}</Link>}
        </List>
      )}
      <Link to="/users/new">New User</Link>
    </>
  );
}

export default UsersPage;
