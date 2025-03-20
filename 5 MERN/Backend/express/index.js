const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./routers/UserRouter');

// create a server start  
const server = express();
server.use(express.json()); // middleware
server.use(cors(
    {
        origin: ["http://localhost:5173"]
    }
));
server.use('/user', UserRouter);

// create a server end



// connect with database start
mongoose.connect(
    "mongodb://localhost:27017/",
    {
        dbName: 'wsjp79'
    }
).then(
    () => {
        // server run at port 5000 start 
        server.listen(
            5001,
            () => {
                console.log("Server start at port 5000");
            }
        )
        // server run at port 5000 end
    }
).catch(
    (error) => {
        console.log(error);
        console.log("Database not connected");
    }
)
// connect with database end


