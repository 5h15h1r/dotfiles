require('dotenv').config()

const express = require('express')
const app = express()

const notFound = require('./middleware/notFound')
const handleError  = require('./middleware/handleError')
