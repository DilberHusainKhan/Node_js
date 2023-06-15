const mongoose = require("mongoose");

// create a Schema 
const userShema = mongoose.Schema({
    name:{type:String},
    age:{type:Number}
});

// Create Model
const Users = mongoose.model('Users',userShema);

module.exports = Users;