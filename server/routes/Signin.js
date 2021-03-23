const express = require('express');
const router = express.Router();
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const {JWT_SECRET}=require('../keys');
const User = require('../models/user.js');


router.post('/',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password)
    {
        res.status(422).json({error:"please add correct email and password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token =jwt.sign({_id:savedUser._id},JWT_SECRET)
               // res.json({token}) 
                res.cookie('token',{token});
                res.json({"hi":"bye"});
            }
            else{
                return res.status(422).json({error:"invalid password"})
            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
})
module.exports = router;