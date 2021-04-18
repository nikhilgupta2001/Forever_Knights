const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const Video = require('../models/video');
const User = require('../models/user');
const Profile=require('../models/profile')
var nodemailer = require('nodemailer');


// /-----nodemailer---------/

var transporter = nodemailer.createTransport({
    service: '',
    host: 'localhost',
    port: 5000,
    auth: {
      user: 'nikgupta2001warg@gmail.com',
      pass: 'E0QQCO'
    }
  });
  

//////////////////////////////////

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
    // console.log(req.body);
    const { VideoUrl, ImageUrl, writeup, interest, userName,requiredviews} = req.body;

    Profile.find({Interests:interest}).then((res)=>{
          var arr=res;
          arr.map((e)=>{
             const email=e.Email;
             console.log(email)
             var mailOptions = {
                from: 'nikgupta2001warg@gmail.com',
                to: email,
                subject: 'Hey'+ `${e.userName}` + 'A new advertisement is been added Looks Interesting',
                text:writeup
              };
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
          })
    })
    User.findOne({ UserName: userName }).then(response => {
        // console.log(response);
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