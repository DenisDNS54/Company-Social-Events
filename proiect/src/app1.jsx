const express = require("express")
const collection = require("./mongo")
const cors = require("cors")

const mongoose = require("mongoose");

const mongoUrl="mongodb+srv://popovicidenis:parola@cluster0.t5wdhkq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
  useNewUrlParser:true
})
.then(()=>{
  console.log("Connected to database");
})
.catch((e)=> console.log(e));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
  const{email,password}=req.body

  try{
    const check=await collection.findOne({email:email})

    if(check){
      res.json("exist")
    }
    else {
      res.json("notexist")
    }

  }

  catch{
    res.json("notexist")

  }
})


app.post("/signup",async(req,res)=>{
  const{email,password}=req.body

  const data={
    email:email,
    password:password
  }

  try{
    const check=await collection.findOne({email:email})

    if(check){
      res.json("exist")
    }
    else {
      res.json("notexist")
      await collection.insertMany([data])
    }

  }

  catch{
    res.json("notexist")

  }
})

app.listen(8000,()=>{
  console.log("port connected");
})