const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const Video = require('../models/video');

router.post('/', (req, res) => {
    // console.log(req.body);
    const {interest} = req.body;
    // console.log(interest);
    Video.find({interest}).
    then((adds) => {
        if(!adds)
        {
            res.json({message:"No Adds as per your interest"});
        }
        else{
            // console.log(adds);
            res.json(adds);
        }
    }).catch((err)=>{
        res.json(err);
    })
})

module.exports = router;
