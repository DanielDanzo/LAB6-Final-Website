document.addEventListener('DOMContentLoaded', () => {
    const loadCarsBtn = document.getElementById('loadCarsBtn');
    const carList = document.getElementById('carList');
    cars = [];
    loadCarsBtn.addEventListener('click', () => {
        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then(data => {
                cars = data;
                carList.innerHTML = '';
                data.forEach((car, index) => {
                    const carCard = document.createElement('div');
                    carCard.classList.add('car-card');
                    carCard.innerHTML = `
                        <h2>${car.make} ${car.model}</h2>
                        <p><strong>Year:</strong> ${car.year}</p>
                        <p><strong>Make:</strong> ${car.make}</p>
                        <p><strong>Model:</strong> ${car.model}</p>
                        <p><strong>Price:</strong> R${car.price}</p>
                        <button class="btn btn-remove" data-index="${index}">Remove</button>
                    `;
                    carList.appendChild(carCard);
                });
            })
            .catch(error => {
                console.error('Error fetching car data:', error);
            });
    });
});
function addCar(newCar) {
    fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            //reload cars
            // const loadCarsBtn = document.getElementById('loadCarsBtn');
            loadCarsBtn.click();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

carForm.addEventListener('submit', event => {
    event.preventDefault();
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    addCar({ make, model, year, price });
    carForm.reset();
});

// Function to remove a car
function removeCar(index) {
    const carId = cars[index].id;
    fetch(`http://localhost:3000/cars/${carId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            //reload cars
            // const loadCarsBtn = document.getElementById('loadCarsBtn');
            loadCarsBtn.click();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
// Event delegation for remove buttons
carList.addEventListener('click', event => {
    if (event.target.classList.contains('btn-remove')) {
        const index = event.target.dataset.index;
        removeCar(index);
    }
});