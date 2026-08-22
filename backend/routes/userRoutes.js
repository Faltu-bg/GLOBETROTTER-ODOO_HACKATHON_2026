const express=require("express")
const router=express.Router()
const User =require("../models/User")
const handleUserlogin=require("../controllers/handleUserLogin")
const verification=require("../middleware/jsonverification")
router.post("/api/users",handleUserlogin)

router.get("/api/users",verification,(req,res)=>{
    res.send("you are in")
})

module.exports=router