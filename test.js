const fetch=require("isomorphic-fetch")

const fetchUser=async(fullName,Email,password)=>{
try {
    const response=await fetch("http://localhost:3000/api/user/login",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({fullName,Email,password})
})
const result=await response.json()
console.log(result)

} catch (error) {
    console.log(error.message)
}
}
fetchUser("fullname","Email@gmail.com","password" )