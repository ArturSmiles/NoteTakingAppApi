const express = require("express")

const mongoose = require("mongoose");

const cors = require("cors")

const services = require("./services")

const app = express();

app.use(cors())

app.use(express.json())


app.use("/api",services)

app.listen(process.env.PORT,()=>{
    console.log("Server is running")
    mongoose.connect(process.env.MONGO_STRING,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
        if(err) console.log("Db connection is failed ")
        console.log("Db is connected")
    })
})

app.on("error",()=>console.log("Server is not running"))