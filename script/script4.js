console.log('JS OK')

// Create Array

const teamFootball = 
[
    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Roma',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lazio',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Bologna',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Atalanta',
        punti: 0,
        falliSubiti: 0,
    },
]



// Cicle to randomize punti and falli

teamFootball.forEach((team) => {
// Randomize points
team.punti =  Math.floor(Math.random() * 100) + 1 
// Randomize fouls
team.falliSubiti = Math.floor(Math.random() * 40) + 1
})

console.log(teamFootball)


// Create new Array with only points and fouls
const pointsFouls = teamFootball.map(({punti, falliSubiti}) => {
    return {
        punti,
        falliSubiti
    }
})

console.log(pointsFouls)


