const Car = require('./cars-model');

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
  const error = { status: 400 }
  const { vin, make, model } = req.body
  if(!vin || !make || !model) {
    error.message = `${req.body} is missing`
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload, 
  checkVinNumberUnique,
  checkVinNumberValid
}
