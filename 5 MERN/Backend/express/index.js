const express = require('express');
const mongoose = require('mongoose');

// create a server start  
const server = express();

// create a server end

// create a user schema start
const userData = mongoose.Schema(
    {
        name: {
            type: String,//  data type of name shold be string
            maxLength: 15, // maximum 12 characters are allowed
            required: true // mandatory to fill name
        },
        email: {
            type: String,
            minLength: 10,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            default: 18
        },
        password: {
            type: String,
            minLength: 8,
            maxLength: 15
        },
        status: {
            type: Boolean,
            default: true
        }
    }
)
// create a user schema end

// create a collection of user in mongodb start
const userModel = mongoose.model("users", userData);// collection name, schema varible
// create a collection of user in mongodb end

server.post(
    "/user/register",
    (req, res) => {

    }
) // path, function




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
            5000,
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


