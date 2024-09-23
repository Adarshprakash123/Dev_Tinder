const express=require('express');
const app=express();

app.use("/get",(req,res)=>{
    res.send("Hello World")
})

app.use("/get1",(req,res)=>{
    res.send("Hello World")
})



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})