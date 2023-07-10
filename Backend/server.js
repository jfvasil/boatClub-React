const express = require('express')
const connectDB = require('./config/database')
const app = express()
const router = express.Router()

require('dotenv').config({path: './.env'})

connectDB()

app.listen(3000, () => {
    console.log('Server Running in Port 3000')
})