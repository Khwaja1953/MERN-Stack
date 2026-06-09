const express = require("express");

const router = express.Router();


router.get("/",(req,res)=>{
    return res.send("this is product route")
});
router.post("/",()=>{});
router.put("/",()=>{})
router.delete("/",()=>{})


module.exports = router