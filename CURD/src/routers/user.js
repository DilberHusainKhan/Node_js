// Now crerate the Route
const express = require('express');
const User = require("../mongoose/model/user");
const UserRoute = express.Router();
// 1 Create data in the db
UserRoute.post('/post',(req,res)=>{
    const data = req.body;
    User(data).save();
    res.status(201).send({message:"User Created Sucessfully"});
})

// 2 Get data  from DB
UserRoute.get('/get', async(req,res)=>{
    const users = await User.find();
    res.send(users);
})

// 3 Update the data in the  DB
UserRoute.patch("/patch/:id",async(req,res)=>{
    const user =await User.findById(req.params.id);
    await user.updateOne(req.body);
    res.send({message:"Update Sucessfully"});
});

// 4:Delete from DB
UserRoute.delete('/delete/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send({message:"Delete data sucessfully"});
})
// Export the module
module.exports = UserRoute;
