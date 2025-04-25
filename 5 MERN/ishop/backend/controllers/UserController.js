const { encryptPassword, decryptPassword, accessToken } = require("../helping");
const CartModel = require("../models/CartModel");
const UserModel = require("../models/UserModel");
const UserRouter = require("../routers/UserRouter");


class UserController {
    create(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const checkEmail = await UserModel.findOne({ email: data.email });

                    if (checkEmail) {
                        reject(
                            {
                                msg: "Email already exist",
                                status: 0
                            }
                        )
                    } else {

                        const user = new UserModel(
                            {
                                ...data,
                                password: encryptPassword(data.password)
                            }
                        )

                        user.save().then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "User Created",
                                        status: 1,
                                        user: { ...user.toJSON(), password: null },
                                        token: accessToken(user.toJSON())
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                reject(
                                    {
                                        msg: "User not created",
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
                    const user = await UserModel.findOne({ email: data.email });
                    if (user) {
                        if (data.password == decryptPassword(user.password)) {
                            resolve(
                                {
                                    msg: "Login Successfully",
                                    status: 1,
                                    user: { ...user.toJSON(), password: null },
                                    token: accessToken(user.toJSON())
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
    moveToDb(data, userId) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    if (data) {
                        const allPromise = data.map(
                            async (cartItem, cartIndex) => {
                                const existingProduct = await CartModel.findOne({ product_id: cartItem.product_id, user_id: userId }) ?? null;
                                if (existingProduct) {
                                    // update product qty in cart

                                    CartModel.updateOne(
                                        { _id: existingProduct._id },
                                        {
                                            $inc: {
                                                qty: cartItem.qty
                                            }
                                        }
                                    ).then(
                                        (success) => {
                                            console.log(success);
                                        }
                                    ).catch(
                                        (error) => {
                                            console.log(error);
                                        }
                                    )


                                } else {
                                    // new product create in cart
                                    new CartModel(
                                        {
                                            user_id: userId,
                                            product_id: cartItem.product_id,
                                            qty: Number(cartItem.qty)
                                        }
                                    ).save().then(
                                        (success) => {
                                            console.log(success);
                                        }
                                    ).catch(
                                        (error) => {
                                            console.log(error);
                                        }
                                    )
                                }

                            }
                        )
                        await Promise.all(allPromise);
                    } else {
                        console.log("Cart is empty");
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

module.exports = UserController