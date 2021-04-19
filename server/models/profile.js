const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    userName: {
        type: String,
        //required: true,
        default:"",
     },
    image: {
        type:String,
        default:"",

    },
    addcount: {
        type: Number,
        default:0,
    },
    credits: {
        type: Number,
        default:0
    },
    Interests:[
        String
    ],
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
