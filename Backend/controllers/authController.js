
const passport = require('passport')
const {validationResult} = require('express-validator')
const User = require('../models/userAuthModel')
const Member = require('../models/memberModel')

exports.signupAuth = async (req, res) => {

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

exports.signup = async (req, res) => {
  const {token} = req.params
  const {name, email, password,} = req.body

  try {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }

    const member = await Member.findOne({token, used: false})
    if(!member){
      return res.status(404).json({errors: 'Invalid token'})
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    
    // Create new user
    const newUser = new User({ name, email, password})
    await newUser.save()

    //Mark token as used
    member.used = true
    await member.save()

    res.status(201).json({ message: 'Signup successful' })
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' })
  }
}

// Function: Login
// Description: User login
exports.login = (req, res, next) => {
  passport.authenticate('local', (error, user) => {
    if (error || !user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    req.logIn(user, (error) => {
      if (error) {
        return res.status(500).json({ error: 'Login failed' })
      }

      res.status(200).json({ message: 'Login successful' })
    })
  })(req, res, next)
};

// Function: Logout
// Description: User logout
exports.logout = (req, res) => {
  req.logout()
  res.status(200).json({ message: 'Logout successful' })
}

