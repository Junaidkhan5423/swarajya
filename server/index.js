const express = require("express");
const cors = require ('cors');
const mongoose = require("mongoose");
const routes = require('./src/Routes/student.routes')
const adminroutes = require('./src/Routes/admin.routes')
const app = express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())


routes.routes(app)
adminroutes.adminroutes(app)

mongoose.connect("mongodb://127.0.0.1:27017/studentDB",{
    useNewUrlParser: true,
    useUnifiedTopology:true,

},(err)=>{
    if (err) throw err;
    console.log("DB connected")
})

app.listen(9002,()=>{
    console.log("Server is running at 9002")
})