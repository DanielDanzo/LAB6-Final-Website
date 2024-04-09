const cars = require('../cars.json')

module.exports = async function (context, req) {
    //console.log('Hello');
    //console.log(context.body.json());
    const id = req.params.carId;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    console.log(context.res.json(cars));
}