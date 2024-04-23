import { HttpResponse, http } from 'msw';
import users from '../__fixtures__/users';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const handlers = [
  http.get(`${baseUrl}/users`, () => HttpResponse.json(users)),
  http.get(`${baseUrl}/users/:userId`, () => HttpResponse.json(users[0])),
];

export { handlers };
