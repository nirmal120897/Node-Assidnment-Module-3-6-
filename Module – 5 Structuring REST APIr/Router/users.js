const express = require('express')
const user = require('../Controller/user')
const jwt = require('jsonwebtoken')
const router = express.Router()
router.get('/',user.getUser)

router.post('/',user.Register)
router.get('/:id',user.singleUser)
router.delete('/:id',user.deletUser)
router.put('/:id',user.UpdateUser)
router.post('/login',user.Login)

module.exports = router 