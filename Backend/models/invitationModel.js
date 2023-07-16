const mongoose = require('mongoose')

const invitationSchema = new mongoose.Schema({
    code :{
        type: String,
        required: true,
        unique: true
    },
    used : {
        type: Boolean,
        default: false
    },

})

const Invitation = mongoose.model('Invitation', invitationSchema)