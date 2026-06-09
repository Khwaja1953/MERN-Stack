const Course = require("../Models/Course");

const handleCourseRegistration = async (req,res)=>{
 const {name, fee, duration, subjects} = req.body;
 console.log(name,fee,duration,subjects);
 const newCourse = await Course.create({
    name,fee,duration,subjects
 });
 if(!newCourse){
    return res.status(400).json({error: "something went wrong"})
 }
 return res.status(201).json({data:"success",newCourse});
}

module.exports ={handleCourseRegistration}