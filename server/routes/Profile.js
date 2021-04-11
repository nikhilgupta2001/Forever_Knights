const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.js');
const { route } = require('./SignUp.js');
const Video =require('../models/video.js')

router.post('/',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    const {name,email,Interests,ImageUrl}=req.body;
    const profile=new Profile({
        userName:name,
        Email:email,
        Interests,
        ImageUrl,
    })  
    profile.save().
    then(profile => res.json(profile))
       .catch((err)=>{
       console.log(err);
    })
})


router.post('/credit',(req,res)=>{
      const {url} =req.body;
      Video.findOne({"video.videoUrl":url}).
      then((res)=>{
         console.log(res);
      })
      
})

module.exports = router;