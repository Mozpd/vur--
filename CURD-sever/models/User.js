var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid')
var UserSchema = new Schema({
        _id:{
            type:String,
            default:shortid
        },
    username:{
            type:String,
        require:true
    },
    name:{
            type:String
    },
    password:{
            type:Number
    },
    phone:{
            type:Number
    },
    email:{
            type:String
    },
    create_time:{
            type:Date,
        default:Date.now
    },
    is_active:{
            type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('User',UserSchema);