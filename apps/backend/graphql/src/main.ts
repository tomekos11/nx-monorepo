// import express from 'express';

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// const app = express();

// app.get('/', (req, res) => {
//     res.send({ 'message': 'Hello API'});
// });

// app.listen(port, host, () => {
//     console.log(`[ ready ] http://${host}:${port}`);
// });


import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { gql } from 'apollo-server-express';

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log('GraphQL API running on http://localhost:4000/graphql');
  });
}
startServer();
