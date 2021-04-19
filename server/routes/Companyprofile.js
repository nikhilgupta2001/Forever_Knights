const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const Video = require('../models/video');
const User = require('../models/user');
const Profile = require('../models/profile')
var nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/video');


// /-----nodemailer---------/



//////////////////////////////////

router.post('/getcompanyvideos', (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    Video.find({ postedBy: id }).
        populate('postedBy', '_id')
        .then(response => {
            console.log(response);
            res.json(response);
        })
});


router.post('/savevideo', (req, res) => {
    // console.log(req.body);
    const { VideoUrl, ImageUrl, writeup, interest, userName, requiredviews } = req.body;
    let flag = 1;
    Video.findOne({ writeup: writeup }).then((response) => {
        console.log(response, "35 backend");
        if (response != null) {
          console.log("Hello")
            flag = 0;
            res.json({ err: "Video already exists" });

        }
        console.log(flag);
    })

   
    Profile.find({ Interests: interest }).then((res) => {
        var arr = res;
        arr.map((e) => {
            const email = e.Email;
            console.log(email)
            //  let transporter = nodemailer.createTransport({
            //     host: "smtp.ethereal.email",
            //     port: 587,
            //     secure: false, // true for 465, false for other ports
            //     auth: {
            //         user: 'marcelle.boyer0@ethereal.email', // ethereal user
            //         pass: 'dXVQ9wAqgC14fVSycm', // ethereal password
            //     },
            //     tls:{
            //       rejectUnauthorized:false,
            //     }
            // });
            // const msg = {
            //     from: 'marcelle.boyer0@ethereal.email', // sender address
            //     to:email, // list of receivers
            //     subject:'Hey'+ `${e.userName}` + 'A new advertisement is been added Looks Interesting', // Subject line
            //     text: writeup, // plain text body
            // }
            //  transporter.sendMail(msg).then((info)=>{
            //     //  console.log(info)
            //     console.log("Message sent: %s", info.messageId);
            //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            //  })
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account

            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



        })
    })


    User.findOne({ UserName: userName }).then(response => {
        // console.log(response);
        var postedBy = response._id;

        const video = new Video({
            writeup,
            interest,
            thumbnailurl: ImageUrl,
            videoUrl: VideoUrl,
            postedBy,
            requiredviews
        })

        // video.video.push(videoUnique);

        if (flag == 1) {
            video.save()
                .then((data) => {
                    var final = {
                        ...data,
                        err: null
                    }
                    res.json(final)
                })
                .catch(err=>{
                  console.log(err);
                })
                
        }

    })
        .catch(err => {
            console.log(err);
        })

}


)

module.exports = router;