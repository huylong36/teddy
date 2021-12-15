const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    const { username, password,passwordHint,age,phone,email } = req.body
    console.log(req.body);
    if (!username || !password) {
        return res.status(400)
            .json({ success: false, message: 'Missing username or password' })
    }
    try { 
        // check người dùng đã tồn tại chưa 
        const user = await User.findOne({ username })
        console.log('user', user)
        if (user) {
            return res.status(400).json({ success: false, message: 'Tài khoản đã tồn tại' });
        }
        const hashPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashPassword , passwordHint:hashPassword,age,phone,email})

        await newUser.save()

        //return token
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ success: true, message: 'success', accessToken })

    } catch (error) {
        console.log(error);
    }
})



router.post('/login', async (req, res) => {
    const { username, password } = req.body
    console.log('req.body', req.body)
    if (!username || !password) {
        return res.status(400)
            .json({ success: false, message: 'Missing username or password' })

    }
    //
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ success: false, message: 'Incorrect username or password' })
        }
        const passwordInvalid = await argon2.verify(user.password, password)
        if (!passwordInvalid) {
            return res.status(400).json({ success: false, message: 'Incorrect username or password' })
        }
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
        return res.status(200).json({ success: true, message: 'User logged in successfully', accessToken , user })
    } catch (error) {
        console.log(error);
    }
})
router.get('/get-user-from-token', async (req, res) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findOne({ _id:decoded.userId })

        return res.status(200).json({ success: true, message: "access token succesfully", user })
    } catch (error) {
        console.log(error);
    }
})
module.exports = router