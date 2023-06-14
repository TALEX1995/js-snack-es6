console.log('JS OK')


// Get element from DOM

const bikePlaceholder = document.getElementById('bike');

// Create Array

const bikes = 
[
    {
        name: 'Mountain Bike',
        weight: 30
    },
    {
        name: 'Ducati',
        weight: 32
    },
    {
        name: 'Fantic',
        weight: 28
    },
    {
        name: 'Torbado',
        weight: 37
    },
    {
        name: 'Fondriest',
        weight: 30
    },
    {
        name: 'Olympia',
        weight: 25
    },
    {
        name: 'Carbon Bike',
        weight: 23
    },
    {
        name: 'Heavy bike',
        weight: 45
    },
]


// Support Variable 

let lightBike = Infinity
let bikeObject;


// Cicle

bikes.forEach(({weight}, index) => {
    // Condition
    if (weight < lightBike) {
        lightBike = weight
        bikeObject = bikes[index]
    }
})

console.log(lightBike)
console.log(bikeObject)


// Insert name and weight into DOM

const {name, weight} = bikeObject
const bike = `<p>Nome bicicletta: ${name}</p> <p>Weight: ${weight}</p>`
bikePlaceholder.innerHTML = bike


// Another method to do it with filter
const bikeLightest = bikes.filter(({weight}) => weight === lightBike);

console.log(bikeLightest)


// Another method to do it with some
const lightestBike = bikes.find(({weight}) => weight === lightBike);

console.log(lightestBike)


