const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  track:{
    type:String,
    required:true
  },
  artist:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"
  }
})

module.exports = mongoose.model("Song", songSchema)