import express from "express";
import mongoose from "mongoose";
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";

//import from local
import typeDefs from "./Graphql/typedefs.js";
import resolvers from "./Graphql/resolvers.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
        
    });

    await server.start();

    app.use("/graphql",express.json(),expressMiddleware(server));

    await mongoose.connect("mongodb://localhost:27017/graphql");
    console.log("mongodb connected successfully")
    app.listen(PORT,()=>{
        console.log(`App is running at localhost:${PORT}`)
    })
}
startServer();