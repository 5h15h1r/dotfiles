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
            type:  ,
            ref: "User" 
        }
    ],
    latestMsg :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message" 
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
},
{
    timestamp : true
}
)

const chatModel = mongoose.model(chatModel, "chatSchema")

module.exports = chatModel;

// chatname
//isGroupchat
//list users
//latest message
//group admin