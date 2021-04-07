const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.js');


router.post('/',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    const {userName,Email,Interests,ImageUrl}=req.body;
    const profile=new Profile({
        userName,
        Email,
        Interests,
        ImageUrl,
        
    })  
    profile.save().
    then(profile => res.json(profile))
       .catch((err)=>{
       console.log(err);
    })
})

module.exports = router;