import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/auth';

interface FormData {
  username: string;
}

function LoginPage(): JSX.Element {
  const { signIn } = useAuth();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>();
  const navigate = useNavigate();

  function onSubmit(data: FormData): void {
    const { username } = data;

    signIn(username, () => {
      navigate('/', {
        replace: true,
      });
    });
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register('username', {
              required: true,
            })}
          />
          {errors.username && <p>Username is required</p>}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
