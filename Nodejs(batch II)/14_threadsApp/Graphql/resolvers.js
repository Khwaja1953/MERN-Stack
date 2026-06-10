import { Query } from 'mongoose'
import {handleUserRegister, handleUserLogin} from '../Controllers/userController.js'
const resolvers = {
Query: {
    loginUser: handleUserLogin
},
Mutation: {
setUser: handleUserRegister
}

}

export default resolvers

