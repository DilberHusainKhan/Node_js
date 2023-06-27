// Now crerate the Route for just for git 
const express = require('express');
const User = require("../mongoose/model/user");
const UserRoute = express.Router();
// 1 Create data in the db using post medthod
UserRoute.post('/post',(req,res)=>{
    const data = req.body;
    User(data).save();
    res.status(201).send({message:"User Created Sucessfully"});
})

// 2 Get data  from DB using get method
UserRoute.get('/get', async(req,res)=>{
    const users = await User.find();
    res.send(users);
})

// 3 Update the data in the  DB using patch
UserRoute.patch("/patch/:id",async(req,res)=>{
    const user =await User.findById(req.params.id);
    await user.updateOne(req.body);
    res.send({message:"Update Sucessfully"});
});

// 4:Delete from DB we use find by id and delete  
UserRoute.delete('/delete/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send({message:"Delete data sucessfully"});
})
// Export the module for different API in the node 

module.exports = UserRoute;
