const  {Schema, model} = require('mongoose')

const UserSchema = Schema({
    name:{
        type:String,
        required: true,
    },

    email:{
        type:String,
        required: true,
        unique:true
    },


    password:{
        type:String,
        required: true,
    },

    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{ timeStamps:true})

const UserModel = model('User', UserSchema)
module.exports = UserModel