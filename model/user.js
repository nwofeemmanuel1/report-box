const mongoose=require("mongoose")
const connecttoDB=require("../connector/conn")
connecttoDB("connected to user database", "unable to connect to user database")

const UserSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:1000
    },
    Email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
        
    }
})


const User=mongoose.model("user",UserSchema)
module.exports=User