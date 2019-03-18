import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import AuthDirective from '@directives/auth';

const usersSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuthDirective,
  },
});

addMockFunctionsToSchema({ schema: usersSchema, preserveResolvers: true });

export default usersSchema;
