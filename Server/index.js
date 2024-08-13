const { config } = require('dotenv');
const express = require('express');
require('dotenv'),config();
let port = process.env.PORT;
const app = express();
const cors = require("cors")
const userRouter = require("./Routes/User.Routes");
const mongoose = require("mongoose")
let uri = process.env.URI


app.use(cors())
app.use(express.urlencoded({ extended: true, limit: '200mb' }))
app.use(express.json({ limit: '200mb' }))
app.use("/", userRouter)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    mongoose.connect(uri)
 .then(()=>{
     console.log("connected to database already");
 })
 .catch((err)=>{
     console.log(err);
  })
})