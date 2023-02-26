const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    chatName:{
        type: String,
        trim: true
    },
    isGroupChat:{
        type: Boolean,
        default: false
    },
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" 
        }
    ],
    latestMsg :{

    } 

})

// chatname
//isGroupchat
//list users
//latest message
//group admin