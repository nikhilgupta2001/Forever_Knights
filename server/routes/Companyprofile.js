const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const Video=require('../models/video');


router.post('/savevideo',(req,res)=>{
    console.log(req.body);
   const {VideoUrl,ImageUrl,writeup,interest}=req.body;
   var videoUnique={
       videoUrl:VideoUrl,
       thumbnailurl:ImageUrl,
   }
   const video=new Video({
       writeup,
       interest
   })

   video.video.push(videoUnique);

   video.save().then((data)=>{
       res.json(data)
   }).
   catch((err)=>
   console.log(err)
   )

})

module.exports = router;