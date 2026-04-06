const express = require('express');
const router = express.Router();

const {handleUserSignup, handleUserLogin} = require('../Controllers/userController');

router.get('/login',(req, res)=>{
    return res.status(200).json({message: "login page"});
});
router.get('/signup',(req, res)=>{
    return res.status(200).json({message: "signup page"});
});

router.post('/login', handleUserLogin);
router.post('/signup',handleUserSignup);
router.get('/logout',(req, res)=>{
    res.clearCookie("token").redirect('/')
});


module.exports = router;
