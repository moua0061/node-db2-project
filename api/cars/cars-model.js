const db = require('./../../data/db-config');

const getAll = () => {
  //select * from cars;
  return db('cars')
}

const getById = (id) => {
  //select * from cars where id = 1;
  return db('cars').where('id', id).first()
}

const create = (car) => {
  //insert into cars (vin, make, model, mileage, title, transmission) values ('98645666432578906', 'chevy', 'impala', '99765', 'clean', 'auto');
  return db('cars').insert(car)
}

module.exports = {
  getAll, 
  getById,
  create
}
