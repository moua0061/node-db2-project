// DO YOUR MAGIC
const Car = require('./cars-model');
const router = require('express').Router();
const db = require('./../../data/db-config');

router.get('/', () => {
    Car.get()
        .then()
        .catch()
})
router.get('/', () => {
    Car.get()
        .then()
        .catch()
})
router.get('/', () => {
    Car.get()
        .then()
        .catch()
})

module.exports = router;