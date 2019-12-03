const express = require('express')
const jwt =require('jsonwebtoken')
const router = express.Router()
const User= require('../models/user')
const mongoose = require('mongoose')
const db="mongodb+srv://admin:admin@cluster0-o8n6k.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(db,{ useNewUrlParser: true },err  =>{  
    if(err){
        console.error('Error!' + err)
    } else{
        console.log('Connected to mongodb')
    }
    })
router.get('/', (req,res)=> {
    res.send('From API route')
})
router.post('/register',(req,res)=>{
    let userData=req.body
    let user=new User(userData)
    user.save((err,registeredUser)=>{
        if (err) {
            console.log(err)
        }
        else {
            let payload = {subject: registeredUser._id}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
    })
})
router.post('/login',(req,res)=>{
    let userData=req.body
    User.findOne({username: userData.username},(error,user)=>{
        if (error){
            console.log(error)
        } 
        else{
            if(!user){
                res.status(401).send('Неправильное имя пользователя')
            } else
            if(user.password !== userData.password) {
                res.status(401).send('Неправильный пароль')
            
        }
        else{
            let payload = {subject: user._id}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
        }
    })
})
router.get('/events',(req,res,verifyToken) => {
    let events = []
    res.json(events)   
})
router.get('/special', (req,res) => {
    let events = []
    res.json(events)   
})
function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token ==='null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()

}

module.exports = router 