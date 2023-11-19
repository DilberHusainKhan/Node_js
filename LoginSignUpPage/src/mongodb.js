const mongoose  = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");
}).catch(()=>{
    console.log("Failed to connect");
})

// create a schema 
const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// define collection
const collection = new mongoose.model("LoginCollection",LogInSchema)

module.exports = collection