const cars = require('../cars.json')

module.exports = async function (context, req) {
    console.log('Hello');
    //console.log(context.body.model);
    console.log(req.body.json(cars));
}