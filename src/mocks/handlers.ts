/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';

const handlers = [
  rest.get('https://httpbin.org/get', (_request, response, context) => {
    return response(
      context.status(200),
      context.json({
        status: 'ok',
      }),
    );
  }),
];

export default handlers;
