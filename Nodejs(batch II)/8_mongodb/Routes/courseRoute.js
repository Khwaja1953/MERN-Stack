const express = require('express');
const router = express.Router();
const {handleCourseRegistration} = require('../Controller/courseController')

router.post('/',handleCourseRegistration);
// router.get('/',);


module.exports = router