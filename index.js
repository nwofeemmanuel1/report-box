const express=require("express")
const app=express()
app.use(express.json())
require("dotenv").config()

const registerUser=require("./api/register")
app.use("/api/user/register",registerUser)
const login=require("./api/login")
app.use("/api/user/login",login)

app.get("/",(req,res)=>{
    res.send("reportbox running...")
})

let port=process.env.PORT||3000
app.listen(port,()=>console.log(`Server running on port ${port}`))