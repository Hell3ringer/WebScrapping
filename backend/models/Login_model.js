const mongoose = require('mongoose')

const loginTemplate = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('userCreds',loginTemplate);