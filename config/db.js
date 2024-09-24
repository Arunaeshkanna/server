const mongoose = require("mongoose")
 mongoose.connect(process.env.MONGOURL||"mongodb+srv://admin:akkanna@mern.fr7s6.mongodb.net/?retryWrites=true&w=majority&appName=Mern")
 const connection=mongoose.connection;
 connection.on('connected',()=>{
    console.log("DB CONNECTED")
 }
)
connection.on('error',()=>console.log("DB ERROR"))
module.exports=mongoose