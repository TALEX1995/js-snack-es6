console.log('JS OK')

// Exercise 1


// Array

const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];


// Create an Array to insert object with guests info

let infoGuests = []

// Cicle forEach to create the objext

guests.forEach((element, index) => {
    
    const objectGuests =
    {
        nomeDelTavalo : 'Tavolo VIP',
        nome: element,
        posto: index,
    }

    infoGuests.push(objectGuests) 
})

console.log(infoGuests)