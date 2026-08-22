const jwt =require("jsonwebtoken")
const User=require("../models/User")
const secret_key="Something"

const login= async (email,password_hash)=>{
    const user=await User.findOne({email})
    if(!user)  throw new Error(`${email} not found`)
    if(user.password_hash!== password_hash){
        throw new Error("Invalid Credentials")
    }
    const payload={
        "id":user.id,
        "email":user.email,   
    }
    const token =jwt.sign(payload,secret_key)
    return {payload,token}
}

module.exports=login