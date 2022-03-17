const Joi=require("joi")

const validateLogin=(req)=>{
const schema=Joi.object({
Email:Joi.string().email().required(),
password:Joi.string().min(8).max(1000).required()
})
const result=schema.validate({Email:req.Email,password:req.password})
if(result.error)return result.error.message;
return true
}
module.exports=validateLogin