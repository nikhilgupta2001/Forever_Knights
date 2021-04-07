const mongoose =require('mongoose')


const userSchema=new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("User",userSchema);