console.log('JS OK')

// Exercise 1


// Array

const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];


// Create an Array to insert object with guests info

let infoGuests = []


// Cicle with forEach to create the objext

guests.forEach((name, index) => {
    
    const objectGuests =
    {
        tavolo : 'Tavolo VIP',
        nome: name,
        posto: index + 1,
    }

    infoGuests.push(objectGuests) 
})

console.log(infoGuests)



// Cicle with map to create the objext
const objectGuests = guests.map((name, index ) => {
    return {
        tavolo: 'Tavolo VIP',
        nome: name,
        age: index + 1,
    }
  })

console.log(objectGuests)