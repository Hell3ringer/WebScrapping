const mongoose = require('mongoose')

const loginTemplate = new mongoose.Schema({
    idToken:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('userCreds',loginTemplate);