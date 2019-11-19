const express = require('express')
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
            res.status(200).send(registeredUser)
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
            res.status(200).send(user)
        }
        }
    })
})

module.exports =router 