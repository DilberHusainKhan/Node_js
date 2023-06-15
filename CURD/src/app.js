const express = require('express');

require('./mongoose/mongoose');
const UserRoute = require('./routers/user');

const app = express();
app.use(express.json());
app.use(UserRoute);

app.listen(8000,()=>{
    console.log("App is running on port 8000");
})