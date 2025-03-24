const express = require('express');
const userModel = require('../models/UserModel');
const UserController = require('../controllers/userController');
const UserRouter = express.Router();


// create a user start
UserRouter.post(
    "/register",
    (req, res) => {
        const result = new UserController().createUser(req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
) // path, function
// create a user end

//login user start
UserRouter.post(
    "/login",
    (req, res) => {
        const result = new UserController().loginUser(req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)
//login user end

// read users start
UserRouter.get(
    "/:id?",
    (req, res) => {
        const result = new UserController().readUser(req.params.id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)
// read users end

//delete users start
UserRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new UserController().deleteUser(req.params.id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
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