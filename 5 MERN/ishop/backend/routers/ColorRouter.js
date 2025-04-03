const express = require('express');
const ColorController = require('../controllers/ColorController');
const ColorRouter = express.Router();

// create color start 
ColorRouter.post(
    '/create',
    (req, res) => {
        const result = new ColorController().create(req.body);
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
// create color end

// read color start
ColorRouter.get(
    '/:id?',
    (req, res) => {
        const result = new ColorController().read(req.params.id);
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
// read color end

// delete start
ColorRouter.delete(
    '/delete/:id',
    (req, res) => {
        const result = new ColorController().delete(req.params.id);
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

module.exports = ColorRouter;