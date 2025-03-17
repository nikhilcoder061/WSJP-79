const express = require('express');
const mongoose = require('mongoose');

// create a server start  
const server = express();
server.use(express.json()); // middleware

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


// create a user start
server.post(
    "/user/register",
    (req, res) => {
        try {
            const user = new userModel(
                {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    age: req.body.age,
                    password: req.body.password
                }
            )

            user.save().then(
                (success) => {
                    res.send(
                        {
                            msg: "User created successfully",
                            status: 1
                        }
                    )
                }
            ).catch(
                (error) => {
                    console.log(error);
                    res.send(
                        {
                            msg: "User not created",
                            status: 0
                        }
                    )
                }
            )
        } catch (error) {
            console.log(error);
            res.send(
                {
                    msg: "Internal Server Error",
                    status: 0
                }
            )
        }




    }
) // path, function
// create a user end

//login user start
server.post(
    "/user/login",
    async (req, res) => {
        try {
            const user = await userModel.findOne(
                {
                    email: req.body.email
                }
            )

            if (user) {
                if (user.password == req.body.password) {
                    res.send(
                        {
                            msg: "Login Successfully",
                            status: 1
                        }
                    )
                } else {
                    res.send(
                        {
                            msg: "Password incorrect",
                            status: 0
                        }
                    )
                }
            } else {
                res.send(
                    {
                        msg: "User not Found",
                        status: 0
                    }
                )
            }

        } catch (error) {
            console.log(error);
            res.send(
                {
                    msg: "Internal Server error",
                    status: 0
                }
            )
        }
    }
)
//login user end

// read users start
server.get(
    "/user",
    async (req, res) => {
        try {

            const users = await userModel.find();
            if (users) {
                res.send(
                    {
                        msg: "Users Found",
                        status: 1,
                        users
                    }
                )
            } else {
                res.send(
                    {
                        msg: "Users not found",
                        status: 0
                    }
                )
            }

        } catch (error) {

        }
    }
)
// read users end





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


