const express = require('express')
const router = express.Router()
const authenticatedMiddleware = require('../middleware/auth')

const auth = require('../controllers/main')

router.route('/login').post(auth.login)
router.route('/dashboard').get(authenticatedMiddleware,auth.dashboard)

module.exports = router