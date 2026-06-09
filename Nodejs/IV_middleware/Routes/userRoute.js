import express from 'express';
import checkUser from '../Middlewears/auth.js'
const router = express.Router();
import { blocking, dataChecking, profileMiddleware } from '../Middlewears/middleware.js';

//routes section
router.post('/profile',checkUser, (req, res) => {
    return res.send("welcome to our website")
})
router.post('/data', dataChecking, (req, res) => {
    const data = req.body;
    return res.send("data received")
})
router.get('/', blocking, (req, res) => {
    return res.send("blocking code this takes time")
})

export default router