const express = require("express")
const app = express()
app.use("/hello",(req,res)=>{
res.send("hello world")
})
app.use("/hi",(req,res)=>{
    res.send("hello world everywhere")
    })

    app.use("/hiii",(req,res)=>{
        res.send("hello world every")
        })

app.listen(7777 ,()=>{
    console.log("running succesfully in 7777 server....")
})