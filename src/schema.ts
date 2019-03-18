import { mergeSchemas } from 'graphql-tools';

import AuthDirective from '@directives/auth';

import authenticationSchema from '@modules/authn';
import usersSchema from '@modules/users';

const schema = mergeSchemas({
  schemas: [authenticationSchema, usersSchema],
  schemaDirectives: {
    auth: AuthDirective,
  },
});

export default schema;
