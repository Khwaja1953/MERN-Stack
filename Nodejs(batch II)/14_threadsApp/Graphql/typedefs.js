const typeDefs = `
    type User{
    id: ID!
    name: String!
    email: String!
    password: String!
}
    type Query {
    loginUser(email: String!, password: String!): String
    }
    type Mutation{
    setUser(name: String!, email: String!, password: String!): Boolean
    
    }
`

export default typeDefs;