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

const secret_key = "Something";

const verification = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization token missing"
        });
    }

    // Expected:
    // Authorization: Bearer <token>

    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({
            message: "Invalid authorization format"
        });
    }

    const token = parts[1];

    try {

        const user = jwt.verify(
            token,
            secret_key
        );

        req.user = user;

        next();

    } catch (err) {

        return res.status(401).json({
            message: err.message,
            name: err.name
        });

    }
};

module.exports = verification;