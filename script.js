// Task 1

// const listProperties = (student) => {
//     if(typeof(student) != 'object') return []
//     if(Object.keys(student)) return Object.keys(student)
//     return []
// }

// const student = {
//     name : "David Rayy",
//     class : "VI",
//     rollno : 12 
// }
// // const student = "this is a string"

// console.log(listProperties(student))

// Task 2

// const deleteProperty = (student) => {
//     delete student.rollno
//     console.log(student)
// }

// const student = {
//     name: "Ankit Singh",
//     class: "UKG",
//     rollno: 5
// }

// deleteProperty(student)

// Task 3

// const getLength = (student) => {
//     return Object.keys(student).length
// }

// const student = {
//     name: "Ankit Singh",
//     class: "UKG",
//     rollno: 5
// }

// console.log(getLength(student))

// Task 4

// const readingStatus = (library) => {
//     library.map(({ title, author, readingStatus }) => {
//         console.log((readingStatus ? "Read " : "Not read ") + " " + title + " by " + author)
//     })
// }

// const library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];

// readingStatus(library)

// Task 5

// class volume {
//     constructor(radius, height) {
//         this.radius = radius
//         this.height = height
//     }

//     getVolume = () => {
//         return Math.PI * this.radius * this.radius * this.height
//     }
// }
// const obj = new volume(4, 6)
// console.log("The volume is = " + obj.getVolume().toFixed(4))


// Task 6

const library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

library.sort((x, y) => {
    return (x.libraryID > y.libraryID ? -1 : 1);
})
console.log(library)

