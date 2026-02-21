const {User} = require('../Models/UserModel')


//function to update user
const handleUserUpdate = async (req, res)=>{
const {email , name, password} = req.body;
console.log(email)
const existingUser = await User.find({email});
console.log(existingUser)
if (existingUser.length == 0){
    return res.status(404).json({"message":"email is invalid"})
}
const updatedUser = await User.updateOne({email},{"name": name || existingUser.name , "password":password || existingUser.password})
if (! updatedUser){
    return res.status(500).json({"message":"something went wrong please try again"})
}
return res.status(200).json({"message": "updated successfully"})
};

///function to delete user
const handleUserDelete = async (req,res)=>{
    const {email} = req.body;
    const existingUser = await User.find({email});
    // console.log(existingUser)
    if(existingUser.length == 0){
        return res.status(404).json({message: "invalid email"})
    }
    const deletedUser = await User.deleteOne({email })
    console.log(deletedUser)
    if(!deletedUser){
        return res.status(500).json({message:"something went wrong please try again"})
    }
    return res.status(200).json({message:"user deleted successfully"});

}
const handleParameterUserDelete = async(req,res)=>{
     const {email} = req.params;
    const existingUser = await User.find({email});
    // console.log(existingUser)
    if(existingUser.length == 0){
        return res.status(404).json({message: "invalid email"})
    }
    const deletedUser = await User.deleteOne({email })
    console.log(deletedUser)
    if(!deletedUser){
        return res.status(500).json({message:"something went wrong please try again"})
    }
    return res.status(200).json({message:"user deleted successfully"});
}
module.exports = {handleUserUpdate, handleUserDelete, handleParameterUserDelete}