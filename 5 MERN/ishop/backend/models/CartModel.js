const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            require: true
        },
        product_id: {
            type: mongoose.Schema.ObjectId,
            ref: "Products",
            require: true
        },
        qty: {
            type: Number,
            min: 1,
            require: true,
            default: 1
        }

    },
    {
        timestamps: true
    }
)

const CartModel = mongoose.model("Cart", cartSchema)

module.exports = CartModel;