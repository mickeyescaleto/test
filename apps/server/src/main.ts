import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .listen(3000, ({ url }) => console.log(`🦊 Elysia is running at ${url}`));
