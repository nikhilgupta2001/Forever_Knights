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
        type: Number,
        default:0
    },
    Interests: {
        type: String,
        required: true
    },
    Email: {
        type: String,
    }
    ,
    ImageUrl:{
        type:String,
    },
    videoWatched:[
         
    ]
})


module.exports = mongoose.model("Profile", profileSchema);



// videoWatched:{
//     type:Array,
//     default:[],
    
// }
        //   date: { type: Date, default: Date.now },
