const mongoose = require('mongoose')

const messageModel = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    
})