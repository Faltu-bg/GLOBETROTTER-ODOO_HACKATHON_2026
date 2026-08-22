const jwt =require("jsonwebtoken")
const secret_key="something"
const verification=async (req,res,next)=>{
    const token=req.headers.authorization
     if(!token) return null
    try{
        const user=jwt.verify(token,secret_key)
        req.user=user
        next()
    }
    catch(err){
        return res.send(err)
    }
}

module.exports=verification