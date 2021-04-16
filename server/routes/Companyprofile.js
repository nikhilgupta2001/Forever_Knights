const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const Video = require('../models/video');
const User = require('../models/user');



router.post('/getcompanyvideos',(req,res)=>{
    console.log(req.body);
    const {id}=req.body;
    Video.find({postedBy:id}).
    populate('postedBy','_id')
    .then(response =>{
         console.log(response);
          res.json(response);
    })     
});
router.post('/savevideo', (req, res) => {
    console.log(req.body);
    const { VideoUrl, ImageUrl, writeup, interest, userName,requiredviews} = req.body;
    User.findOne({ UserName: userName }).then(response => {
        console.log(response);
        var postedBy=response._id;
        
        const video = new Video({
            writeup,
            interest,
            thumbnailurl:ImageUrl,
            videoUrl:VideoUrl,
            postedBy,
            requiredviews
        })

        // video.video.push(videoUnique);
        video.save()
        .then((data) => {
            res.json(data)
        }).
            catch((err) =>
                console.log(err)
            )
    })
        .catch(err => {
             console.log(err);
        })
})

module.exports = router;