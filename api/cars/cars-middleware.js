const Car = require('./cars-model');
const vin = require('vin-validator');

const checkCarId = (req, res, next) => {
  Car.getById(req.params.id)
    .then(car => {
      if(!car) {
        next({
          status: 404,
          message: `car with id ${car} is not found`
        })
      } else {
        req.car = car
        next()
      }
    })
    .catch(next)
}

const checkCarPayload = (req, res, next) => {
  if(!req.body.vin)
    return next({
      status: 400,
      message: 'vin is missing'
    })
  if(!req.body.make)
    return next({
      status: 400,
      message: 'make is missing'
    })
  if(!req.body.model)
    return next({
      status: 400,
      message: 'model is missing'
    })
  if(!req.body.mileage)
    return next({
      status: 400,
      message: 'mileage is missing'
    })
    next()
}

const checkVinNumberValid = (req, res, next) => {
  if(vin.validate(req.body.vin)) {
    next()
  } else {
    next({
      status: 400,
      message: `vin ${req.body.vin} is invalid`
    })
  }
}

const checkVinNumberUnique = (req, res, next) => {
  Car.getByVin(req.body.vin)
    .then(idExist => {
      if(!idExist) {
        next()
      } else {
        next({
          status: 400,
          message: `vin ${req.body.vin} already exists`
        })
      }
    })
    .catch(next)
}

module.exports = {
  checkCarId,
  checkCarPayload, 
  checkVinNumberUnique,
  checkVinNumberValid
}
