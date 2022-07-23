/*
==========
| SERVER |
==================================================================================================================================

? @collaborators:        
    * James Primitive
    * Zac Eitel
    * Kaylan Prophet
    * Mason Morris
    * William Horn

? @doc-name:        server.js
? @doc-created:     07/13/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

Welcome to Sapient!

This file is the main application entry-point for initializing express server and all back-end components such as:
    - Mongo database connection
    - Apollo server & GraphQL routing

==================================================================================================================================

? @doc-todo
=================
| DOCUMENT TODO |
==================================================================================================================================

todo:   Heroku deployment not working; fix issue with root directory package.json scripts
        *Complete -Will, 07/16/2022

todo:   Finish implementing apollo server & mongodb connection

==================================================================================================================================
*/

// Require local modules
const path = require("path");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");
const dbConnection = require("./config/db-connection");
const { authMiddleware } = require("./utils/auth");
// const seed = require("./seed");

// Access .env variables
const PORT = process.env.PORT || 3001;

// create apollo server instance
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Create express server app
const app = express();

// Use app middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// !disable page serving when testing graphql with /graphql
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

//
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  dbConnection.once("open", async () => {
    console.log("database is open");

        // await seed.plantUsers();
        // await seed.plantEvents();
        // console.log('seeds planted!');

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer();
