const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    user_id:{
        type: Number,
        required: true
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required: true
    }
})

const USER = mongoose.model('users', userSchema)


module.exports = USER