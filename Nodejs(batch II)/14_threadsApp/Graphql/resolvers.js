import { Query } from 'mongoose'
import {handleUserRegister} from '../Controllers/userController.js'
const resolvers = {
Query: {
    getUser: ()=>{}
},
Mutation: {
setUser: handleUserRegister
}

}

export default resolvers

