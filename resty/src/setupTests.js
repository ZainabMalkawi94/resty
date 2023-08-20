import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

const server = setupServer(...handlers);

if (import.meta.env.NODE_ENV === 'development') {
  server.listen();
}
