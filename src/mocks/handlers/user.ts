/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';
import users from '../__fixtures__/users';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const handlers = [
  rest.get(`${baseUrl}/users`, (_request, response, context) => {
    return response(context.status(200), context.json(users));
  }),
  rest.get(`${baseUrl}/users/:userId`, (request, response, context) => {
    const { userId } = request.params;

    return response(
      context.status(200),
      context.json({
        ...users[0],
        id: userId,
      }),
    );
  }),
];

export default handlers;
