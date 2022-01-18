exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.text('VIN', 256).unique().notNullable()//required, unique
    tbl.text('Make', 256).notNullable()//required
    tbl.text('Model', 256).notNullable()//required
    tbl.float('Mileage').notNullable()//required
    tbl.text('Title') //optional
    tbl.text('Transmission') //optional
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
