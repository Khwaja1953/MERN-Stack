const express = require("express");
const {ApolloServer} = require("@apollo/server")
const {expressMiddleware} = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const { title } = require("node:process");
const { default: axios } = require("axios");

const TodoUsers = [
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
  { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.com" },
  { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" }
]

const TodoData = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  { userId: 1, id: 2, title: "quis ut et eum", completed: false },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  { userId: 2, id: 5, title: "laboris sunt enim", completed: false },
  { userId: 2, id: 6, title: "qui ullam ratione", completed: false },
  { userId: 2, id: 7, title: "quia nisi sunt", completed: true },
  { userId: 3, id: 8, title: "sunt repellat sed", completed: false },
  { userId: 3, id: 9, title: "mod est showdown", completed: true },
  { userId: 3, id: 10, title: "quia et dignissimos", completed: false }
]
async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
         type Todo {
                id: ID!
                title: String!
                completed: Boolean!
                userId: ID!
                user: Users!
            }
            type Users{
            name: String!
            id: ID!
            email: String!
            }
        
        type Query{
        getTodo: [Todo]
        getUsers: [Users]
        user(id: ID!): Users
        }

        `,
        resolvers:{
            Todo: {
                user: async  (parent)=>{
               const data = TodoUsers.find((user)=> user.id == parent.userId)
               return data;
            }
            },
           Query:{
            getTodo: async ()=>{
               return TodoData;
            },
            getUsers: async ()=>{
               return TodoUsers;
            },
            user: async (parent, {id})=> {
               return TodoUsers.find((user)=> user.id == id);
            }
        }
        }
    
    });
    await server.start();
    // app.use(bodyParser.json());
    app.use("/graphql",express.json(),expressMiddleware(server))

    app.listen(9000,()=>{console.log("app is running at port 9000")})
}

startServer();