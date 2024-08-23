import { useLocation, useParams } from 'react-router-dom';
import Error from '../../../components/Error';
import Link from '../../../components/Link';
import Loader from '../../../components/Loader';
import Seo from '../../../components/Seo';
import { useUser } from '../../../hooks/user';

type Params = Readonly<{
  userId: string;
}>;

function UserPage() {
  const { userId } = useParams<Params>();
  const { pathname } = useLocation();

  const { isLoading, isError, error, data: user } = useUser(parseInt(userId!, 10));

  if (isLoading) {
    <Loader />;
  }

  if (isError) {
    <Error {...error} />;
  }

  return (
    <>
      <Seo title={user?.name} />
      <h1>{user?.name}</h1>
      <ul>
        <li>
          <Link to={`${pathname}/edit`}>Edit User</Link>
        </li>
        <li>
          <Link to="/users">Back to all users</Link>
        </li>
      </ul>
    </>
  );
}

export default UserPage;
