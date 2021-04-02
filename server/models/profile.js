const mongoose =require('mongoose')


const profileSchema=new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:file,
        required:true
    },
    addcount:{
        type:number,
        required:true
    },
    credits:{
        type:number,
        required:true
    },
    interests :{
        type:[],
        required:true
    }
})


module.exports = mongoose.model("Profile",profileSchema);