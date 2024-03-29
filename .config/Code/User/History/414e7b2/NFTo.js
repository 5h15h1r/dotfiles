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
                results = await User.populate(results,{
                    path : 'latestMsg.sender',
                    select: "name picture email"
                } )
                res.status(200).send(results)
            })        
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
}

const createGroupChat = async (req, res) => {
    if (!req.body.users || !req.body.name) {
      return res.status(400).send({ message: "Please Fill all the feilds" });
    }
   
    var users = JSON.parse(req.body.users);
  
    if (users.length < 2) {
      return res
        .status(400)
        .send("More than 2 users are required to form a group chat");
    }
  
    users.push(req.user);
  
    try {
      const groupChat = await Chat.create({
        chatName: req.body.name,
        users: users,
        isGroupChat: true,
        groupAdmin: req.user,
      });
  
      const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
        .populate("users", "-password")
        .populate("groupAdmin", "-password");
  
      res.status(200).json(fullGroupChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  };

const renameGroup = async(req,res) => {
    const {chatId, chatName} = req.body;

    const updatedName = await Chat.findByIdAndUpdate(
        chatId,{
            chatName
        },
        {
            new:true
        }
    )
    .populate("users", "-password")
        .populate("groupAdmin", "-password");
    if (!updatedName){
        res.status(404)
        throw new Error("chat not found")
    }
}

module.exports = {accessChat, fetchChats, createGroupChat, renameGroup};