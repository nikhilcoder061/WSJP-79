const CartModel = require("../models/CartModel");
const OrderModel = require("../models/OrderModel");
const OrderRouter = require("../routers/OrderRouter");


class OrderController {
    orderPlace(orderData) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const cartData = await CartModel.find({ user_id: orderData.user_id }).populate("product_id", "_id final_price");
                    const productDetails = cartData.map(
                        (cartItem) => {
                            return {
                                product_id: cartItem.product_id._id,
                                qty: cartItem.qty,
                                price: cartItem.product_id.final_price,
                                total: cartItem.product_id.final_price * cartItem.qty
                            }
                        }
                    )
                    const order = await new OrderModel(
                        {
                            user_id: orderData.user_id,
                            product_details: productDetails,
                            order_total: orderData.order_total,
                            payment_mode: orderData.payment_mode,
                            shipping_details: orderData.shipping_details
                        }
                    )

                    order.save().then(
                        (success) => {
                            if (success.payment_mode == 0) {
                                resolve(
                                    {
                                        msg: "Order Placed Successfully",
                                        status: 1,
                                        order_id:order._id
                                    }
                                )
                            } else {

                            }
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
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

module.exports = OrderController