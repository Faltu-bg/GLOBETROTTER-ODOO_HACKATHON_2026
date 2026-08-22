const jwt =require("jsonwebtoken")
const secret_key="something"
const verification=async (req,res,next)=>{
    const authHeader = req.headers.authorization;
     const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

    console.log("token")
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