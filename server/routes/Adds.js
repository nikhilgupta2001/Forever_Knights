const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const Video = require('../models/video');

router.post('/', (req, res) => {
    // console.log(req.body);
    const {interest} = req.body;
    console.log(interest[0],"line 9");
  
    Video.find({interest:{
        $in:interest
    }}).
    then((adds) => {
        console.log(adds, "line 14");
        if(!adds)
        {
            res.json({message:"No Adds as per your interest"});
        }
        else{
            console.log(adds,"21");
            res.json(adds);
        }
    }).catch((err)=>{
        res.json(err);
    })
})

module.exports = router;
