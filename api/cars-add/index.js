const cars = require('../cars.json')

module.exports = async function (context, req) {
    console.log('Hello');
    console.log(req.body.json());
}