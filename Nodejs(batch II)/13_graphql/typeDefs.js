const typeDefs = `
    type Todo{
    id: ID!
    title: String!
    completed: Boolean!
    userId: ID!
    User: User!
    }

    type User{
    id: ID!
    name: String!
    email: String!
    }

    type Query{
    getAllTodo: [Todo]
    getAllUsers: [User]
    User(id: ID!): User
    }
`

module.exports = typeDefs