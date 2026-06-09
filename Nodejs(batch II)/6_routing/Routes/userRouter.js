const express = require("express");

const router = express.Router();


router.get("/",(req,res)=>{
    res.send("this is user route")
});
router.post("/",()=>{});
router.put("/eidt",()=>{})
router.delete("/",()=>{})


module.exports = router