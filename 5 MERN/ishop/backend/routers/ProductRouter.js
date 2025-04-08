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

// updateProduct start
ProductRouter.patch(
    "/update/:id",
    (req, res) => {
        const result = new ProductController().update(req.params.id, req.body.flag);
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
// updateProduct end

//  multiple image start 

ProductRouter.post(
    '/multipleimage/:id',
    fileUpload(
        {
            createParentPath: true
        }
    ),
    (req, res) => {

        const result = new ProductController().multipleImage(req.params.id, req.files?.other_image);
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


//  multiple image end

module.exports = ProductRouter;