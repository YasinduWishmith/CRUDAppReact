const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    fullname : {
         type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    address : {
        type : String
    }

},{
    collection: 'users'
})


module.exports = mongoose.model('UserModel', userSchema);
