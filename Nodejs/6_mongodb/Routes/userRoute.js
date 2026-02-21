const express = require('express');
const router = express.Router();
const {User} = require('../Models/UserModel');
const {handleUserUpdate, handleUserDelete, handleParameterUserDelete} = require('../Controllers/userController')

router.post('/signup',async (req,res)=>{
    // const {name,email,password} = req.body;
    const data = req.body;
    console.log(data.name,data.email,data.password);
    const newUserCreate = await User.create({name:data.name,email:data.email,password:data.password})

    return res.status(200).json({"message":"account created"})
});

router.get('/users',async (req,res)=>{
    const allUsers = await User.find();
    return res.status(200).json({"users":allUsers})
});

router.get('/user',async (req,res)=>{
    const {name} = req.body;
    // const oneUser = await User.findOne({name});
    const oneUser = await User.find({name});
    if (oneUser){
        return res.status(200).json({"user":oneUser})
    }
    else{
        return res.status(404).json({"message":"user not found"})
    }

});
//for updating the user.....
router.patch('/update',handleUserUpdate);

//for deleting the user....
router.delete('/delete',handleUserDelete);
router.delete('/delete/:email', handleParameterUserDelete)

module.exports = {router}