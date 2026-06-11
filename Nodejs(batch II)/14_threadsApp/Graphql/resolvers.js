import { Query } from 'mongoose'
import {handleUserRegister, handleUserLogin, handleGetUser} from '../Controllers/userController.js'
const resolvers = {
Query: {
    loginUser: handleUserLogin,
    getUser: handleGetUser
},
Mutation: {
setUser: handleUserRegister
}

}

export default resolvers

