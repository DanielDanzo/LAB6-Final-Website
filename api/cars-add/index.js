const cars = require('../cars.json')

module.exports = async function (context, req) {
    const newCar = req.body;
    cars.push(newCar);
    context.res.json(cars);
    //console.log(context.body.model);
    //console.log(req.body.json(cars));
}