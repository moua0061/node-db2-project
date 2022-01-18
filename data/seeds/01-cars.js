// STRETCH
exports.seed = function(knex) {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert([
                { vin: "JH4KA7552RC007366", make: 'toyota', model: 'corolla', mileage: 123456, title: 'clean', transmission: 'manual' }, 
                { vin: "5HD1GX4117K301958", make: 'aston', model: 'martin', mileage: 846394, title: 'clean', transmission: 'auto' },
                { vin: "1G3NF52E3XC403652", make: 'rolls royce', model: 'phantom', mileage: 5234, title: 'clean', transmission: 'manual' },
                { vin: "JH4KA2640HC004148", make: 'bugatti', model: 'veyron', mileage: 456, title: 'clean', transmission: 'manual' },
                { vin: "JS2RA41S235163290", make: 'mazda', model: 'speed6', mileage: 35876, title: 'salvage', transmission: 'auto' },
            ])
        })
}
