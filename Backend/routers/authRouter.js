const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const refreshController = require('../controllers/refreshController')



router.post('/login', authController.login)

router.get('/refresh', refreshController.handleRefreshToken)



router.post('/logout', authController.logout)

router.get('/register/:token', authController.signupAuth)

module.exports = router
