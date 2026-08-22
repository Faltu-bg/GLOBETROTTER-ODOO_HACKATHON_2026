const express=require('express')
const mongo=require('mongoose')
const app=express()
const PORT=3000
const User=require("./models/User.js")
const Trip=require("./models/Trip.js")
mongo.connect(`mongodb+srv://GlobeTrotter:GlobeTrotter2026@cluster0.z97tamy.mongodb.net/GlobeTrotter`).then(()=>{
    console.log("Mongo connected to atlas")
})
app.get("/user",User)
app.get("/trip",Trip)
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})