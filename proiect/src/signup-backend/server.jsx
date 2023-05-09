const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB connected');
  }).catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });



app.use('/app', routesUrls)
app.listen(4000, ()=>console.log("Server is up and running"))