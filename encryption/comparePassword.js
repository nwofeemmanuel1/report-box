const bcrypt=require("bcrypt")

const comparePassword=async(password,userPassword)=>{
 const result=await bcrypt.compare(password,userPassword)
 return result
}

module.exports=comparePassword