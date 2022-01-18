exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.string('VIN', 17).unique().notNullable()//required, unique
    tbl.string('Make', 150).notNullable()//required
    tbl.string('Model', 150).notNullable()//required
    tbl.float('Mileage').notNullable()//required
    tbl.string('Title', 150) //optional
    tbl.string('Transmission', 150) //optional
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
