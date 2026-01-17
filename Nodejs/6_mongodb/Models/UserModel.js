const mongoose = require('mongoose');

const UserSchmea = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: String
});

const User = mongoose.model("User",UserSchmea);
module.exports = {User};