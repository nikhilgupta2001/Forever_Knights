const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs')
const User = require('../models/user.js')
router.post('/', (req, res) => {  
    const { UserName, email, password,usertype} = req.body
    if (!email && !password && !UserName && !usertype) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        UserName,
                        email,
                        usertype,
                        password: hashedpassword,    
                    })
                    console.log(user);
                    
                    user.save()
                        .then(user => {
                            console.log(user);
                            res.json({ message: "saved successfully" })
                           res.redirect('/');
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

        })
        .catch(err => {
            console.log(err)
        })
})
module.exports = router;