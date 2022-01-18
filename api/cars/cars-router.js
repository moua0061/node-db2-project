// DO YOUR MAGIC
const Car = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');
const router = require('express').Router();

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
    Car.get(req.body)
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(next)
})

module.exports = router;