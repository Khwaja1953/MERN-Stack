const {TodoData, TodoUsers} = require("./Data")
const resolvers = {
Query: {
getAllTodo: ()=> TodoData,
getAllUsers: ()=> TodoUsers,
User: (_,{id})=> TodoUsers.find((user)=> user.id == id)
},
Todo: {
    User: (parent)=> TodoUsers.find((user)=> user.id == parent.userId)
}
}

module.exports = resolvers