const db = require('./../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  //select * from cars;
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  //select * from cars where id = 1;
  return db('cars').where('id', id).first()
}

const create = (car) => {
  // DO YOUR MAGIC
  //insert into cars (vin, make, model, mileage, title, transmission) values ('98645666432578906', 'chevy', 'impala', '99765', 'clean', 'auto');
  return db('cars').insert(car)
}

module.exports = {
  getAll, 
  getById,
  create
}
