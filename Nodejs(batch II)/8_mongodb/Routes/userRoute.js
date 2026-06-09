const express = require('express');
const router = express.Router();
const {userRegistration} = require('../Controller/userController')

router.post("/",userRegistration);

module.exports = router