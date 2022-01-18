const express = require("express")
const server = express();
const carsRouter = require('./cars/cars-router');

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1> what is this? </h1>
    `)
})

server.use('*', (req, res) => {
    res.status(404).json({
        message: `[${req.method}] ${req.baseUrl} not found!`
    })
});

server.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})


module.exports = server
