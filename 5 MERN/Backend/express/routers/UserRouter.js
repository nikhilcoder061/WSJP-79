const express = require('express');
const userModel = require('../models/UserModel');
const UserRouter = express.Router();


// create a user start
UserRouter.post(
    "/register",
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
UserRouter.post(
    "/login",
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
UserRouter.get(
    "/:id?",
    async (req, res) => {
        try {

            const id = req.params.id;
            let users;
            if (id) {
                users = await userModel.findById(id);
            } else {
                users = await userModel.find();
            }

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
// read users end

//delete users start
UserRouter.delete(
    "/delete/:id",
    (req, res) => {
        try {
            const id = req.params.id;
            userModel.deleteOne({ _id: id }).then(
                (success) => {
                    res.send(
                        {
                            msg: "User Deleted Successfully",
                            status: 1
                        }
                    )
                }
            ).catch(
                (error) => {
                    res.send(
                        {
                            msg: "User not Deleted",
                            status: 0
                        }
                    )
                }
            )
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
//delete users end

// status change start 
UserRouter.patch(
    "/status/:id",
    async (req, res) => {
        try {
            const id = req.params.id;
            const user = await userModel.findById(id);
            userModel.updateOne(
                {
                    _id: id
                },
                {
                    status: !user.status
                }
            ).then(
                (success) => {
                    res.send(
                        {
                            msg: "Status update Successfully",
                            status: 1
                        }
                    )
                }
            ).catch(
                (error) => {
                    console.log(error);
                    res.send(
                        {
                            msg: "Status not updated",
                            status: 0
                        }
                    )
                }
            )
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
// status change end

// update user start
UserRouter.put(
    "/update/:id",
    async (req, res) => {
        try {

            const id = req.params.id;
            const user = await userModel.findById(id);

            console.log(req.body);

            userModel.updateOne(
                { _id: id },
                {
                    ...req.body
                }
            ).then(
                (success) => {
                    res.send(
                        {
                            msg: "User updated Successfully",
                            status: 1
                        }
                    )
                }
            ).catch(
                (error) => {
                    console.log(error);
                    res.send(
                        {
                            msg: "User not updated",
                            status: 0
                        }
                    )
                }
            )

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
// update user end

module.exports = UserRouter;