import { SchemaDirectiveVisitor, AuthenticationError } from 'apollo-server';
import gql from 'graphql-tag';
import {
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLField,
  defaultFieldResolver,
} from 'graphql';

export const authDirective = gql`
  directive @auth(roles: [String!]) on FIELD_DEFINITION
`;

export class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(
    field: GraphQLField<any, any>,
    details: {
      objectType: GraphQLObjectType | GraphQLInterfaceType;
    },
  ): GraphQLField<any, any> | void | null;

  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    const { role } = this.args;

    field.resolve = async function(...args) {
      const [, , ctx] = args;
      if (ctx.req && ctx.req.user) {
        if (
          role &&
          (!ctx.req.user.roles || !ctx.req.user.roles.includes(role))
        ) {
          throw new AuthenticationError(
            'You are not authorized to view this resource.',
          );
        } else {
          const result = await resolve.apply(this, args);
          return result;
        }
      } else {
        throw new AuthenticationError(
          'You must be signed in to view this resource.',
        );
      }
    };
  }
}

export default AuthDirective;
