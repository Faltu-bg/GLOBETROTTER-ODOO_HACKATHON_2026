const login=require("../services/authService")

const handleUserlogin=async (req,res)=>{
    try{
    const {email,password}=req.body
    const {token,payload}=await login(email,password)
    return res.status(200).json({payload,token})
    }
    catch(err){
        res.status(401).send(err.message)
    }
}
module.exports=handleUserlogin