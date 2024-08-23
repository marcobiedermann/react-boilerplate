import { useForm } from 'react-hook-form';
import Link from '../../../components/Link';
import Seo from '../../../components/Seo';
import { useCreateUser } from '../../../hooks/user';

interface FormData {
  name: string;
}

function NewUserPage() {
  const { mutate } = useCreateUser();
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    mutate(data);
  }

  return (
    <>
      <Seo title="New User" />
      <h1>Create a new user</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register('name')} />
        </div>
        <div>
          <button type="submit">Create</button>
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

export default NewUserPage;
