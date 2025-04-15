const { encryptPassword, decryptPassword } = require("../helping");
const AdminModel = require("../models/AdminModel");
const AdminRouter = require("../routers/AdminRouter");


class AdminController {
    create(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const checkEmail = await AdminModel.findOne({ email: data.email });

                    if (checkEmail) {
                        reject(
                            {
                                msg: "Email already exist",
                                status: 0
                            }
                        )
                    } else {

                        const admin = new AdminModel(
                            {
                                ...data,
                                password: encryptPassword(data.password)
                            }
                        )

                        admin.save().then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "Admin Created",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                reject(
                                    {
                                        msg: "Admin not created",
                                        status: 0
                                    }
                                )
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
    login(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const admin = await AdminModel.findOne({ email: data.email });
                    if (admin) {
                        if (data.password == decryptPassword(admin.password)) {
                            resolve(
                                {
                                    msg: "Login Successfully",
                                    status: 1,
                                    admin: { ...admin.toJSON(), password: null }
                                }
                            )
                        } else {
                            reject(
                                {
                                    msg: "Password not correct",
                                    status: 0
                                }
                            )
                        }
                    } else {
                        reject(
                            {
                                msg: "Email not found",
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

}

module.exports = AdminController