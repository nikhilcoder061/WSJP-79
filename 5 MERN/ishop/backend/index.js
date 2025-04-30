require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
const CategoryRouter = require('./routers/CategoryRouter');
const ColorRouter = require('./routers/ColorRouter');
const ProductRouter = require('./routers/ProductRouter');
const AdminRouter = require('./routers/AdminRouter');
const UserRouter = require('./routers/UserRouter');
const OrderRouter = require('./routers/OrderRouter');

// middleware
server.use(express.json());
server.use(cors(
    {
        origin: ['http://localhost:5173']
    }
));
server.use(express.static("Public"));

server.use('/category', CategoryRouter);
server.use('/color', ColorRouter);
server.use('/product', ProductRouter);
server.use('/admin', AdminRouter);
server.use('/user', UserRouter);
server.use('/order', OrderRouter);



mongoose.connect(
    process.env.MONGODB_KEY,
    { dbName: 'ishop79' }
).then(
    (success) => {
        server.listen(
            5000,
            () => {
                console.log("Server start at pot 5000");
            }
        )
    }
).catch(
    (error) => {
        console.log(error);
    }
)