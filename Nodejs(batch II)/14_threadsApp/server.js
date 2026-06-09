import express from "express";
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


    app.listen(PORT,()=>{
        console.log(`App is running at localhost:${PORT}`)
    })
}
startServer();