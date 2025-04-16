const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryRouter = express.Router();
const fileUpload = require('express-fileupload');
const authAdmin = require('../middleware/authAdmin');

// create category start 
CategoryRouter.post(
    '/create',
    [
        fileUpload(
            {
                createParentPath: true
            }
        ),
        authAdmin
    ],

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

// edit category start 
CategoryRouter.put(
    "/edit/:id",
    fileUpload(
        {
            createParentPath: true
        }
    ),
    (req, res) => {
        const result = new CategoryController().edit(req.body, req.params.id, req.files?.categoryImageName);
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
// edit category end

CategoryRouter.patch(
    "/status/:id",
    (req, res) => {
        const result = new CategoryController().statusChange(req.params.id);
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

module.exports = CategoryRouter;