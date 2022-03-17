const jwt=require("jsonwebtoken")
const privateKey="process.env.tokenKey"
const genToken=(user_id)=>{
const token=jwt.sign({user_id},privateKey)
return token
}

module.exports=genToken