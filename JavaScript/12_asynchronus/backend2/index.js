const express = require("express");
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{

    const {age,name} = req.query;
    console.log("This is get request request accepted for age ",age,name)

    return res.status(200).json({message: "data fetched successfully"})
});
app.post("/", (req, res)=>{
    const {name, address} = req.body;
    console.log(name,address);
    //logic saved in database
    res.status(201).json({message:"data saved successfully"})
})

app.put("/",(req, res)=>{
    const {name,address} = req.body;
    console.log("address chaged for ",name,address);
    //changed address for this name
    return res.status(201).json({message:"data changed successfully",user: {name,address}})
})
app.delete("/",(req,res)=>{
    const {name} = req.body;
    console.log("data deleted successfully for ",name);
    return res.status(200).json({message:"data deleted successfully"})
})

app.post("/user",(req, res)=>{
   

    console.log(req.body,req.file);
    return res.status(201).json({message: "name and profile updated successfully"})
})






app.listen(5000,()=>{console.log("server is running...")})