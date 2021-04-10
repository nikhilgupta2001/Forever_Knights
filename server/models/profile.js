const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    userName: {
        type: String,
        //required: true,
     },
    image: {
        type:String

    },
    addcount: {
        type: Number,

    },
    credits: {
        type: Number
    },
    Interests: {
        type: String,
        required: true
    },
    Email: {
        type: String,
       // required: true
    }
    ,
    ImageUrl:{
        type:String,
    }
})


module.exports = mongoose.model("Profile", profileSchema);
