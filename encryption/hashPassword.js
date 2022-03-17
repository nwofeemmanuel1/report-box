const bcrypt=require("bcrypt")

const hashPassword=async(password)=>{
const salt=await bcrypt.genSalt(10)
const pwd=await bcrypt.hash(password,salt)
return pwd
}

module.exports=hashPassword