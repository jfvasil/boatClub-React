const express = require('express')
const connectDB = require('./config/database')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config({path: './.env'})

connectDB()

const recapRouter = require('./routers/meetingRecapsRouter')
const newsRouter = require('./routers/newsAndUpdatesRouter')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/recaps', recapRouter)
app.use('/api/news', newsRouter)




app.listen(3000, () => {
    console.log('Server Running on Port 3000')
})