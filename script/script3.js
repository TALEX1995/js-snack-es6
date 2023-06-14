console.log('JS OK')


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


// Cicle

bikes.forEach(({weight}, index) => {
    // Condition
    if (weight < lightBike) {
        lightBike = weight
    }
})

console.log(lightBike)

// Support Variable for the object 
let lightestBike;

// Cicle to take the object with the minor weight
bikes.forEach(({weight}, index) => {
    if(lightBike === weight) {
        lightestBike = bikes[index]
    }
})

console.log(lightestBike)



// Another method to do it with filter
const bikeLightest = bikes.filter(({weight}) => weight === lightBike);

console.log(bikeLightest)


// Another method to do it with some
// const lightestBike = bikes.find(({weight}) => weight === lightBike);

// console.log(lightestBike)