const express = require('express')
const connectDB = require('./config/database')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')

require('./config/passport')(passport)
require('dotenv').config({path: './.env'})

connectDB()

const recapRouter = require('./routers/meetingRecapsRouter')
const newsRouter = require('./routers/newsAndUpdatesRouter')
const authRouter = require('./routers/authRouter')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/recaps', recapRouter)
app.use('/api/news', newsRouter)
app.use('/api/auth', authRouter)

app.use(session({
    secret: process.env.session_secret, 
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


app.listen(3000, () => {
    console.log('Server Running on Port 3000')
})