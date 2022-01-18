// STRETCH
exports.seed = function(knex) {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert([
                { vin: 12345678901234567, make: 'toyota', model: 'corolla', mileage: 123456, title: 'clean', transmission: 'manual' }, 
                { vin: 08978685958473859, make: 'ashton', model: 'martin', mileage: 846394, title: 'clean', transmission: 'auto' },
                { vin: 94746385970785746, make: 'rolls royce', model: 'phantom', mileage: 5234, title: 'clean', transmission: 'manual' },
                { vin: 22548462436382637, make: 'bently', model: 'rich', mileage: 456, title: 'clean', transmission: 'manual' },
                { vin: 986435999742134, make: 'mazda', model: 'speed6', mileage: 35876, title: 'savage', transmission: 'auto' },
            ])
        })
}
