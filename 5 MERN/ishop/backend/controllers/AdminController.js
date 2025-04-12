const { encryptPassword } = require("../helping");
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

}

module.exports = AdminController