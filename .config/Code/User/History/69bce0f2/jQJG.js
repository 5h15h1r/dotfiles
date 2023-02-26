const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    chatName:{
        type: String,
        trim: true
    }
})

// chatname
//isGroupchat
//list users
//latest message
//group admin