const User = require('../Models/User');
const {generateUserToken} = require('../Services/auth');
const handleUserSignup = async (req , res)=>{
    try{
        const {name, email, password} = req.body;
        console.log(name,email,password);
        const user = await User.findOne({email});
        if(user){
            // return res.render('signup', {error: 'Email already registered'});
            return res.status(401).json({error: "email already exists"})
        }
        
        await User.create({email, name, password});
        // return res.redirect('/');
        return res.status(201).json({message:"account created successfully"})

    }
    catch( error){
        console.error(error);
        // return res.render('signup', {error: 'Signup failed. Please try again'});
        return res.status(500).json({error: "something went wrong"})
    }
}

handleUserLogin = async (req, res)=>{
try{
const {email, password} = req.body;
const user = await User.checkUserPassword(email, password);
const token = generateUserToken(user);
// res.cookie("token",token);
return res.status(200).json({user,token})
// return res.redirect('/');
}catch(error){
    // return res.render('login',{error: error})
    return res.status(400).json({error})
}
}


module.exports = {handleUserSignup, handleUserLogin}