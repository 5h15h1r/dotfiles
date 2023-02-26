const Chat = require('../models/chatModel')
const Message = require('../models/messageModel')
const User = require('../models/userModel')

const sendMessage = async (req, res) =>{
        const {chatId, content} = req.body
        if (!content || !chatId){
            res.sendStatus(400)
        }

        var newMessage = {
            sender: req.user._id ,
            content:content,
            chat: chatId 
        };
        try {
            var message = await Message.create(newMessage);

            message = await message.populate("sender","name pic").execPopulate();
            message = await message.populate("sender").execPopulate();
            message = await User.populate(message, {
                path: 'chat.users',
                select: 'name pic email'
            })

            await Chat.findById(req.body.chatId,{
                latestMsg: message,
            })
            res.json(message)
        } catch (error) {
            res.sendStatus(400)
            throw new error(error.message)
        } 
}

module.exports = {sendMessage}