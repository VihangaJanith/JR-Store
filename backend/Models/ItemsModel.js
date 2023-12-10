const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:false
    },
    quantity:{
        type:String,
        required:false
    },
    addedUser:{
        type:String,
        required:false,
    },
    lastUpdated:{
        type:String,
        required:false,
    },
    status:{
        type:String,
        required:false,
    },
    other:{
        type:String,
        required:false,
    },
},{
    timestamps:true
})

const user = mongoose.model('Store Items' , ItemSchema)

module.exports = user