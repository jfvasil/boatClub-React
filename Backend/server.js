const express = require('express')
const connectDB = require('./config/database')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const verifyJWT = require('./middleware/verifyJWT')



require('dotenv').config({path: './.env'})

connectDB()

const recapRouter = require('./routers/meetingRecapsRouter')
const newsRouter = require('./routers/newsAndUpdatesRouter')
const authRouter = require('./routers/authRouter')
const signUpRouter = require('./routers/signUpRouter')
const refreshRouter = require('./routers/refreshRouter')
const recoveryRouter = require('./routers/recoveryRouter')

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/signup', signUpRouter)
app.use('/auth', authRouter)
app.use('/refresh', refreshRouter)
app.use('/recovery', recoveryRouter)

app.use(verifyJWT)

app.use('/api/recaps', recapRouter)
app.use('/api/news', newsRouter)







app.listen(3000, () => {
    console.log('Server Running on Port 3000')
})