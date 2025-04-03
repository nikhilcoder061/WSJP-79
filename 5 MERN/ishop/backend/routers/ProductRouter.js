const express = require('express');
const ProductController = require('../controllers/ProductController');
const ProductRouter = express.Router();
const fileUpload = require('express-fileupload');

// read product start
ProductRouter.get(
    '/:id?',
    (req, res) => {
        const result = new ProductController().read(req.params.id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                console.log(error);
                res.send(error);
            }
        )
    }
)
// read product end

// create Product start 
ProductRouter.post(
    '/create',
    fileUpload(
        {
            createParentPath: true
        }
    ),
    (req, res) => {
        const result = new ProductController().create(req.body, req.files?.main_image);
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
// create Product end

module.exports = ProductRouter;