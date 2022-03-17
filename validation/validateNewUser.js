const Joi=require("joi")

const validateNewUser=(req)=>{
const schema=Joi.object({
fullName:Joi.string().required().min(3).max(1000),
Email:Joi.string().email().required(),
password:Joi.string().min(8).max(1000).required()
})
const result=schema.validate({fullName:req.fullName,Email:req.Email,password:req.password})
if(result.error)return result.error.message;
return true
}
module.exports=validateNewUser