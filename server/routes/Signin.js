const express = require('express');
const router = express.Router();
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const {JWT_SECRET}=require('../keys');
const User = require('../models/user.js');
const Profile = require('../models/profile.js');


router.post('/',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');

    console.log(req.body);
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
                console.log(token);
               // res.json({token}) 
                // res.cookie('token',{token});
                console.log(savedUser);
                var usertype=  savedUser.usertype;
                Profile.findOne({Email:email})
                .then((response)=>{
                    const data={
                        response,
                        token,
                        usertype
                    }
                    res.json(data);
                })
                .catch((err)=>console.log(err))
               // res.end(token);
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