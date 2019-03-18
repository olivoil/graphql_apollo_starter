import gql from 'graphql-tag';

const typeDefs = gql`
  type Session {
    authToken: String!
    systemKey: String!
    systemSecret: String!
  }

  type Query {
    session(
      authToken: String!
      systemKey: String!
      systemSecret: String!
    ): Session
  }

  type Mutation {
    login(email: String!, password: String!): Session
    register(
      email: String!
      password: String!
      systemKey: String!
      systemSecret: String!
    ): Session
    logout(authToken: String!): Boolean
  }
`;

export default typeDefs;
