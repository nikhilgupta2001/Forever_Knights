const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const videoSchema = new mongoose.Schema({
    writeup: {
        type: String,
        required: true
    },
    interest: {
        type: String
    },
    thumbnailurl: {
        type: String,
        required: true
    },
    // Newly Added at 23:33 at 07/04/2021 
    videoUrl: {
        type: String,
        required: true
    },

    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    views: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    requiredviews:{
        type:Number,
    }
    

})

module.exports = mongoose.model("Video", videoSchema);