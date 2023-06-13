console.log('JS OK')

// Create Array

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 98,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    },
]


// Array students with more than 70 grades

const goodStudents = students.filter((student) => {
    return student.grades > 70;
})

console.log(goodStudents)


// Array students wich have more than 70 grades and id more than 120

const idStudents = students.filter((student) => {
    if (student.grades > 70 && student.id > 120) return true  
})

console.log(idStudents)


// Create array with student Name
const studentName = students.map((student) => {
    return student.name   
})



