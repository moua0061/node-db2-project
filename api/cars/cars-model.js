const db = require('./../../data/db-config');

const getAll = () => {
  //select * from cars;
  return db('cars')
}

const getById = (id) => {
  //select * from cars where id = 1;
  return db('cars').where('id', id).first()
}

const create = async (car) => {
  //insert into cars (vin, make, model, mileage, title, transmission) values ('98645666432578906', 'chevy', 'impala', '99765', 'clean', 'auto');
  const [id] = await db('cars').insert(car)
  return getById(id);
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

module.exports = {
  getAll, 
  getById,
  create,
  getByVin
}
