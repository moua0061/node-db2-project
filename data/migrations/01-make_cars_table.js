exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.string('vin', 17).unique().notNullable()//required, unique
    tbl.string('make', 150).notNullable()//required
    tbl.string('model', 150).notNullable()//required
    tbl.integer('mileage').notNullable()//required
    tbl.string('title', 150) //optional
    tbl.string('transmission', 150) //optional
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
