const express = require('express');
const router = express.Router();
const Car = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');

router.get('/', (req, res, next) => {
    Car.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(next)
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car)
})


router.post('/', (req, res, next) => {
    // const { body } = req.body
    // Car.get({body})
    //     .then(newCar => {
    //         res.status(201).json(newCar)
    //     })
        // .catch(next)
        res.json('posting new car')
})

module.exports = router;