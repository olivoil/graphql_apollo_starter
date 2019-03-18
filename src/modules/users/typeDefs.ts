import gql from 'graphql-tag';
import { authDirective } from '@directives/auth';

const typeDefs = gql`
  ${authDirective}

  enum Role {
    ADMIN
    USER
  }

  type User {
    id: ID!
    email: String!
    firstName: String
    lastName: String
    avatar: String
    roles: [Role!]
  }

  type Query {
    me: User @auth
    user(id: ID!): User @auth
  }

  type Mutation {
    updateUserInfo(
      id: String!
      email: String
      name: String
      avatar: String
    ): User! @auth
  }
`;

export default typeDefs;
