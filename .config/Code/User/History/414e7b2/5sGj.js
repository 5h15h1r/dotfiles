const Chat = require('../models/chatModel')
const User = require('../models/userModel')


const accessChat = async (req, res) => {
    const { userId } = req.body

    if (!userId){
        console.log("UserId not sent with request")
        return res.sendStatus(400)
    }

    var isChat = await Chat.find({
        isGroupChat : false,
        $and : [
            {
                users : {$elemMatch: {$eq : req.user._id}},
                users : {$elemMatch: {$eq : userId}},
            }
        ],
    }).populate("users", "-password").populate("latestMsg")
    
    isChat = await User.populate(
        isChat,
        {
            path : 'latestMsg.sender',
            select: "name picture email"
        } 
        )
    if (isChat.length > 0){
        res.send(isChat[0]);
    }else{
        var chatData = {
            chatName : "sender",
            isGroupChat : "false",
            users : [req.user._id, userId], 
        }
    }
    try {
        const createdChat = await Chat.create(chatData)
        const FullChat = await Chat.findOne({_id : createdChat._id}).populate("users", "-password")
        res.status(200).send(FullChat)
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
}


const fetchChats = async (req, res) =>{
    try {
        Chat.find({users:{$elemMatch:{$eq:req.user._id}}})
            .populate("users", "-passwords")
            .populate("groupAdmin", "-password")
            .populate("latestMsg")
            .sort({updatedAt: -1})
            .then(async (results)=>{
                results = await User.populate(results,)
            })        
    } catch (error) {
        
    }
}

module.exports = {accessChat, fetchChats};