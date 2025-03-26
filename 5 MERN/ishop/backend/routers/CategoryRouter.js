const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryRouter = express.Router();

// create category start 
CategoryRouter.post(
    '/create',
    (req, res) => {
        const result = new CategoryController().create(req.body);
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
// create category end

module.exports = CategoryRouter;