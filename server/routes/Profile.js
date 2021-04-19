const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.js');
const { route } = require('./SignUp.js');
const Video = require('../models/video.js')
const sys = require('util')
const win = require('node-windows')


router.post('/', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // console.log(req.body);

  var { name, email, Interests, ImageUrl } = req.body;
  console.log(Interests);
  Interests = Interests[0];
  Profile.findOne({ userName: name }).then((response) => {
    if (response == null) {
      const profile = new Profile({
        userName: name,
        Email: email,
        Interests,
        ImageUrl,
      })
      profile.save().
        then(profile => res.json(profile))
        .catch((err) => {
          console.log(err);
        })
    }
    else {
      console.log(Interests, "32")
      Interests.map((e)=>{
        console.log(e);
        
        Profile.updateOne({ userName: name }, { $push:  { Interests: e }, $set: { "ImageUrl": ImageUrl } })
      })
      console.log(Interests, "34")
    }
  })
  // const profile = new Profile({
  //   Interests,
  //   ImageUrl,
  // })
  // profile.find({userName:name})
  // .then((res)=>{
  //   console.log(res);
  // })
  // .catch((err)=>{
  //   console.log(err);
  // })
  // profile.save().
  //   then(profile => res.json(profile))
  //   .catch((err) => {
  //     console.log(err);
  //   })
})


router.post('/credit', (req, res) => {
  var arr = [];
  const { url, userName, date } = req.body;
  Video.findOne({ "videoUrl": url })
    .then((response) => {
      var t = response.views;
      console.log(response);
      console.log(t + 1);
      Video.updateOne({ "videoUrl": url }, { "views": t + 1 })
        .then(() => {
          Profile.findOne({ "userName": userName })
            .then((op) => {
              var credit = op.credits;
              var obj = {
                url,
                date
              }

              // Profile.updateOne({"userName":userName},{$set:{"credits":0},"$set":{"videoWatched":arr}}).then(()=>{console.log("Credits added")})
              Profile.updateOne({ "userName": userName }, { $set: { "credits": credit + 1 }, "$push": { "videoWatched": obj } }).then(() => { console.log("Credits added") })
            })
            .catch((err) => {
              console.log(err);
            })
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((error) => {
      console.log(error);
    })
})


router.post('/getprofile', (req, res) => {
  const userName = req.body.userName;
  Profile.findOne({ userName }).then((profile) => {
    res.json(profile);
  })
    .catch(err => console.log(err));

})

module.exports = router;