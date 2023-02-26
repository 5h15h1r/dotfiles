const {registerUser, loginUser, allUsers} = require('../controllers/userControllers')
const express = require('express')
const router = express.Router()

router.route('/').post(registerUser).get(allUsers)
router.route('/login').post(loginUser)

module.exports = router