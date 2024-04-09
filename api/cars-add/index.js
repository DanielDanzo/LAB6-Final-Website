const cars = require('../cars.json')

module.exports = async function (context, req) {
    console.log('Hello');
    console.log(req.body)
    context.res.json(cars);
    //console.log(context.body.model);
    //console.log(req.body.json(cars));
}