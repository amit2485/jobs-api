const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Comapny name is required'],
        maxLength:50
    },
    position:{
        type:String,
        required:[true,'Position is required'],
        maxLength:100
    },
    status:{
        type:String,
        enum:["interview","declined","pending"],
        default:"pending"
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,"Please provide the user"]    
    }
},{timestamps:true})

module.exports = mongoose.model('Job',JobSchema)