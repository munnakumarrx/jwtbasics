const {UnAuthenticatedError} = require("../errors/index");
const jsonwebtoken = require("jsonwebtoken");

const authenticatedMiddleware = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnAuthenticatedError("No token is provided")
    }
    const token = authHeader.split(' ')[1]
    try{
        const {id, username} = jsonwebtoken.verify(token, process.env.SECRET_KEY)
        req.user  = {id, username}
        next()
    }catch (err){
        throw new UnAuthenticatedError('not have permission to access this routes')
    }

}

module.exports = authenticatedMiddleware