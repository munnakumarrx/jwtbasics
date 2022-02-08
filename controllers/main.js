const jsonwebtoken = require('jsonwebtoken')

const {BadRequestError}  = require('../errors/index')

const login = async (req, res)=>{
    const {username, password} = req.body
    if(!username || !password){
        throw new BadRequestError("Username and Password is required")
    }

    const id = new Date().getDate()
    const token = jsonwebtoken.sign({username, id}, process.env.SECRET_KEY,{
        expiresIn: '1d'
    })

    res.status(200).json({
        "msg": "login successfully",
        token
    })
}

const dashboard = async (req, res)=>{
    console.log(req.user)
    res.status(200).json({
        num: Math.floor(Math.random()*100)
    })
}

module.exports = {
    login,
    dashboard,
}