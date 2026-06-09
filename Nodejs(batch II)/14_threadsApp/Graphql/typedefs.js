const typeDefs = `
    type User{
    id: ID!
    name: String!
    email: String!
    password: String!
}
    type Query {
    getUser(email: String!): User
    }
    type Mutation{
    setUser(name: String!, email: String!, password: String): User
    
    }
`

export default typeDefs;