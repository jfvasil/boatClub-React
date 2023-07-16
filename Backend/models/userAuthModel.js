const mongoose = require('mongoose')
const bcrypt = require('bycrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
})

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}


userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

const User = mongoose.model('User', userSchema);

module.exports = User;
