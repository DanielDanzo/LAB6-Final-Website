module.exports = async function (context, req) {
    const data = await fetch('/cars.json')
    const cars = data.json()
    context.res.json({
        cars
    });
};