import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Error from '../../../../components/Error';
import Link from '../../../../components/Link';
import Loader from '../../../../components/Loader';
import Seo from '../../../../components/Seo';
import { useUpdateUser, useUser } from '../../../../hooks/user';

type Params = Readonly<{
  userId: string;
}>;

interface FormData {
  name: string;
}

function EditUserPage() {
  const { userId } = useParams<Params>();
  const { isLoading, isError, error, data: user } = useUser(parseInt(userId!, 10));
  const { mutate } = useUpdateUser();
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: user,
  });

  function onSubmit(data: FormData) {
    mutate(data);
  }

  if (isLoading) {
    <Loader />;
  }

  if (isError) {
    <Error {...error} />;
  }

  return (
    <>
      <Seo title={`Update ${user?.name}`} />
      <h1>Update User {user?.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register('name')} />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
      <ul>
        <li>
          <Link to="/users">Back to all users</Link>
        </li>
      </ul>
    </>
  );
}

export default EditUserPage;
