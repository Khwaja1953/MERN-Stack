import mongoose from "mongoose";
import { timeStamp } from "node:console";

const userSchema =  mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    salt: {type: String}
})

const User = mongoose.model("User",userSchema);
export default User;