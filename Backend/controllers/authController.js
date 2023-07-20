
const jwt = require('jsonwebtoken')
// const {validationResult} = require('express-validator')
const User = require('../models/userAuthModel')
const Member = require('../models/memberModel')

//Register token Validation and form rendering
const signupAuth = async (req, res) => {

  try {
    const { token } = req.params;

    // Validate the token 
    const member = await Member.findOne({ token, used: false })
    if (!member) {
      return res.status(404).json({ error: 'Invalid token' })
    }

    // Render the signup form HTML and send it to the client
    res.sendFile('../views/index.html')
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
 
  
}


//Login method
const login = async (req, res) => {
const {email,password} = req.body
if(!email || !password){
  return res.status(400).json({'message': "Email and password are required"})
}
const foundUser = await User.findOne({email})
if(!foundUser){
  return res.SendStatus(401)
} 
if(foundUser.password === password){
  const accessToken = jwt.sign(
    {"email": foundUser.email},
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: '30s'},
  )
  const refreshToken = jwt.sign(
    {"email": foundUser.email},
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: '1d'},
  )
  //Saving the token
    foundUser.refreshToken = refreshToken
    const result = await foundUser.save()
    console.log(result)

    //create cookie 
    res.cookie('jwt', refreshToken,{ httpOnly: true, secure: false, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 })
   
    //send access token
  res.json({accessToken})
}else{
  res.sendStatus(401)
}


}



//Logout Method
const logout = (req, res) => {
  req.logout()
  res.status(200).json({ message: 'Logout successful' })
}

module.exports = {signupAuth, login, logout}