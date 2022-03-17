const express=require("express")
const validateLogin = require("../validation/validateLogin")
 const comparePassword=require("../encryption/comparePassword")
 const genToken=require("../encryption/genToken")
const User=require("../model/user")
const Router=express.Router()

Router.post("/",async(req,res)=>{
const isvalid=validateLogin(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid});
try {
  const user=  await User.findOne({Email:req.body.Email})
  if(!user)return res.status(400).json({error:true,errMessage:"Invalid username or password, user not found"})
  const passwordIsReal= await comparePassword(req.body.password,user.password)
 if(passwordIsReal !=true)return res.status(400).json({error:true,errMessage:"Invalid username or password, invalid pwd"})
 const token=genToken(user._id)
 res.status(200).json({error:false,message:{fullName:user.fullName,Email:user.Email},token})


} catch (error) {
   res.status(400).json({error:true,errMessage:error.message})
}
})
module.exports=Router