const express = require('express')
const app = express()
const dbConn =require('./config/db')
const Projects = require('./models/projectModels')
require('dotenv').config()

// const dotenv = require('dotenv')
// dotenv.config()

const port = process.env.PORT || 3335

app.use(express.json())
app.get('/' , (req,res) => {
    res.json({message: "Welcome"}).status(200)
})

app.listen(port,() => {
    console.log(`Server running in : ${port}`)
})