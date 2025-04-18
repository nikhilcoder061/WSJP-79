const mongoose = require('mongoose');

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
            maxLength: 15,
            required: true
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

module.exports = userModel;