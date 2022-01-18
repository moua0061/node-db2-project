const express = require("express")
const server = express();
const carsRouter = require('./cars/cars-router');

server.use(express.json());

server.get('/api/cars', carsRouter);

server.use('*', (req, res) => {
    res.status(404).json({
        message: `[${req.method}] ${req.baseUrl} not found!`
    })
});

module.exports = server
