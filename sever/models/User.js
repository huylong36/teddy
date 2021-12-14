const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
    age:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,  
        unique:true
    }
    
})
module.exports = mongoose.model('users' , UserSchema) //users : tên của table trong database