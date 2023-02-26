const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const accessChat = require('../controllers/chatController')
const router = express.Router() 

router.route('/').post(protect, accessChat)
router.route('/').get(protect, accessChat.fetchChats)
// router.route('/group').post(protect, createGroupChat)
// router.route('/rename').put(protect, renameGroup)
// router.route('/remove').put(protect, removeFromGroup)
// router.route('/groupadd').put(protect, addToGroup)

module.exports = router