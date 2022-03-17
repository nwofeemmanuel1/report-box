const mongoose=require("mongoose")
const config=require("config")
const db_url=config.get("db_url")
// const db_url="mongodb://localhost:27017/reportbox"

const connectDB=(conn,error)=>{

mongoose.connect(db_url)
.then(()=>console.log(conn))
.catch(err=>console.log(`${error},${err.message}`))

}
module.exports=connectDB