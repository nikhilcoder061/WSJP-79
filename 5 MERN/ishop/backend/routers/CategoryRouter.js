const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryRouter = express.Router();
const fileUpload = require('express-fileupload');

// create category start 
CategoryRouter.post(
    '/create',
    fileUpload(
        {
            createParentPath: true
        }
    ),
    (req, res) => {
        const result = new CategoryController().create(req.body, req.files.categoryImageName);
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
// create category end

CategoryRouter.get(
    '/:id?',
    (req, res) => {
        const result = new CategoryController().read(req.params.id);
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

// delete start
CategoryRouter.delete(
    '/delete/:id',
    (req, res) => {
        const result = new CategoryController().delete(req.params.id);
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
// delete end

module.exports = CategoryRouter;