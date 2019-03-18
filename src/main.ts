import { ApolloServer } from 'apollo-server';
import AuthDirective from '@directives/auth';
import schema from './schema';
import { environment } from './environment';

const server = new ApolloServer({
  schema,
  schemaDirectives: {
    auth: AuthDirective,
  },
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  context: ({ req }) => ({
    req: Object.assign({}, req, {
      // authToken: '123',
      // user: {
      //   id: 'abc',
      //   email: 'bill.adama@battlestargalactica.space',
      //   roles: ['USER'],
      // },
    }),
  }),
});

server
  .listen(environment.port)
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}
