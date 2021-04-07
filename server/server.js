const express=require('express');
const app=express()
const PORT=5000;
const cors = require('cors');
const SignUp = require('./routes/SignUp');
const Signin = require('./routes/Signin');
const Companyprofile=require('./routes/Companyprofile')
const Profile=require('./routes/Profile');
const {MONGOURI}=require('./keys');
require('./models/user')
require('./models/profile')
require('./models/video')
const mongoose=require('mongoose');
app.use(cors());
app.use(express.json());

app.use('/signup',SignUp);

app.use('/signin',Signin);

app.use('/profile',Profile);

app.use('/companyProfile',Companyprofile);

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


app.listen(PORT,'localhost',()=>{
    console.log("Server is running on",PORT);
})
