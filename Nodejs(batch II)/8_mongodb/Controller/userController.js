const User = require("../Models/User")

const userRegistration = async (req,res)=>{
    const {name,email,address} = req.body; 
    const newUser = await User.create({name,email,address});
    if(!newUser){
        return res.status(400).json({error: "something went wrong please try again..."})
    }
    console.log(newUser);
    return res.status(201).json({data: "user registered"})
}

module.exports = {userRegistration}