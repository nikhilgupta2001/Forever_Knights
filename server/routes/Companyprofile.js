const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const Video=require('../models/video');


router.post('/savevideo',(req,res)=>{
    console.log(req.body);
   const {VideoUrl,ImageUrl,writeup}=req.body;
//    const postedBy=window.localStorage.getItem('token');
   const video=new Video({
       url:VideoUrl,
       thumbnailurl:ImageUrl,
       writeup:writeup,
   })
   video.save().then((data)=>{
       res.json({data})
   }).
   catch((err)=>
   console.log(err)
   )

})

module.exports = router;