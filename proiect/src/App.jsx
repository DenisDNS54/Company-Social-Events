//import React, { useState } from "react";
//import './styles/App.css';
//import { Login } from "./Login";
//import { Register } from "./Register";

const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
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

/*function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}*/

export default App;