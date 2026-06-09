const express = require("express");
const {ApolloServer} = require("@apollo/server");
const {expressMiddleware} = require("@apollo/server/express4");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers

    });
    await server.start();

    app.use("/graphql",express.json(),expressMiddleware(server));


    app.listen(8000,()=>{
        console.log("app is running at port 8000")
    })
}

startServer();