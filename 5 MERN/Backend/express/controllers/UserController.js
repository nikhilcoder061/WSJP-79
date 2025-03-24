const userModel = require("../models/UserModel")

class UserController {

    createUser(data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    const user = new userModel(
                        {
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            age: data.age,
                            password: data.password
                        }
                    )

                    user.save().then(
                        (success) => {
                            resolve(
                                {
                                    msg: "User created successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                            reject(
                                {
                                    msg: "User not created",
                                    status: 0
                                }
                            )
                        }
                    )
                } catch (error) {
                    console.log(error);
                    reject(
                        {
                            msg: "Internal Server Error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    loginUser(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const user = await userModel.findOne(
                        {
                            email: data.email
                        }
                    )

                    if (user) {
                        if (user.password == data.password) {
                            resolve(
                                {
                                    msg: "Login Successfully",
                                    status: 1
                                }
                            )
                        } else {
                            reject(
                                {
                                    msg: "Password incorrect",
                                    status: 0
                                }
                            )
                        }
                    } else {
                        reject(
                            {
                                msg: "User not Found",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    console.log(error);
                    reject(
                        {
                            msg: "Internal Server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    readUser(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let users;
                    if (id) {
                        users = await userModel.findById(id);
                    } else {
                        users = await userModel.find();
                    }

                    if (users) {
                        resolve(
                            {
                                msg: "Users Found",
                                status: 1,
                                users
                            }
                        )
                    } else {
                        reject(
                            {
                                msg: "Users not found",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    console.log(error);
                    reject(
                        {
                            msg: "Internal Server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    deleteUser(id) {
        return new Promise(
            (resolve, reject) => {
                try {
                    userModel.deleteOne({ _id: id }).then(
                        (success) => {
                            resolve(
                                {
                                    msg: "User Deleted Successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            reject(
                                {
                                    msg: "User not Deleted",
                                    status: 0
                                }
                            )
                        }
                    )
                } catch (error) {
                    console.log(error);
                    reject(
                        {
                            msg: "Internal Server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

}

module.exports = UserController