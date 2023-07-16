
const passport = require('passport')
const User = require('../models/userAuthModel')
const Invitation = require('../models/invitationModel')

// Function: Signup
// Description: User signup
exports.signup = async (req, res) => {
  const { email, password, code } = req.body

  try {
    //Chcek for invitation code
    const invitation = await Invitation.findOne({code})
    if(!inviation || invitation.used){
        return res.status(404).json({error: 'Invalid invitation code'})
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    
    // Create new user
    const newUser = new User({ email, password})
    await newUser.save()

    //Mark code as used
    invitation.used = true
    await invitation.save()

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

exports.validateInvitation = async (req, res) => {
    const code = req.params.code

    const invitation = await Invitation.findOne({code})
    if(!invitation || invitation.used){
        return res.status(404).json({error: 'Invalid invitation code'})
    }

    res.render('registration-form', {code})
}