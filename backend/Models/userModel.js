const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userRole:{
        type:String,
        required:false,
        default:"user"
    },
    approved:{
        type:Boolean,
        required:false,
        default:false
    }
},{
    timestamps:true
})

const user = mongoose.model('User' , UserSchema)

module.exports = user