const express=require("express")
const Router=express.Router()
const validateNewUser=require("../validation/validateNewUser")
const User=require("../model/user")
const hashPassword = require("../encryption/hashPassword")
const genToken=require("../encryption/genToken")

Router.post("/",async(req,res)=>{
const isvalid=validateNewUser(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid});
try{
  const userExist = await User.findOne({Email:req.body.Email})
  if(userExist)return res.status(400).json({error:true,errMessage:"User already exist please login"})
  const password=await hashPassword(req.body.password)
  const user=await new User({
      fullName:req.body.fullName,
      Email:req.body.Email,
      password:password
  })
  const result=await user.save()
  const token=genToken(result._id)
  res.status(200).json({error:false,message:{fullName:result.fullName,Email:result.Email},token})

}catch(err){
    return res.status(200).json({error:true,errMessage:err.message})
}

})
module.exports=Router