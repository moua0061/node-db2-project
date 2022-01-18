// DO YOUR MAGIC
const Car = require('./cars-model');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    Car.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(next)
})
// router.get('/', () => {
//     Car.get()
//         .then()
//         .catch()
// })
// router.get('/', () => {
//     Car.get()
//         .then()
//         .catch()
// })

module.exports = router;