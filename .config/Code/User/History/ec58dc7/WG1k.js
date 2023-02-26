const express = require('express');
const getBookName = require('../controllers/bookController');
const router = express.Router()

router.route('/',getBookName)
