const express=require('express');
const app=express()
const PORT=5000;
const SignUp = require('./routes/SignUp');
const Signin = require('./routes/Signin');
const {MONGOURI}=require('./keys');
const mongoose=require('mongoose')
app.use(express.json());
app.use('/signup',SignUp);
app.use('/signin',Signin);

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.listen(PORT,'localhost',()=>{
    console.log("Server is running on",PORT);
})
