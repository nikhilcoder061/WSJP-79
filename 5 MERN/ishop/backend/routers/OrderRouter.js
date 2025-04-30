const express = require('express');
const OrderController = require('../controllers/OrderController');
const OrderRouter = express.Router();

// create order start 
OrderRouter.post(
    '/order-place',
    (req, res) => {
        const result = new OrderController().orderPlace(req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
                console.log(error);
            }
        )
    }
)
// create order end



module.exports = OrderRouter;