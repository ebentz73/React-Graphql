import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import resolvers from './resolvers';

const PORT = 4000;

const app = express();

const typeDefs = gql`
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type Query {
        allCourses: [Course]
        course(id: Int!): Course
    }
`;

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)




