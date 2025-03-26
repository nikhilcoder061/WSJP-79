const express = require('express');
const mongoose = require('mongoose');
const server = express();



mongoose.connect(
    "mongodb://localhost:27017/",
    { dbName: 'ishop79' }
).then(
    (success) => {
        server.listen(
            5000,
            () => {
                console.log("Server start at pot 5000");
            }
        )
    }
).catch(
    (error) => {
        console.log(error);
    }
)