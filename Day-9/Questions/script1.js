// Bind

// const person = {
//     name : "Ankit",
//     age : 21,
//     display : function(newName) {
//         // console.log(`I am ${this.name} and my age is ${this.age}`)
//         console.log(`I am ${newName} and my age is ${this.age}`)
//     } 
// }

// // person.display()
// let myInfo = person.display.bind(person)
// // myInfo()
// myInfo = person.display.bind(person, "Blind")
// // myInfo()

// Apply and Call

// const person = {
//     name : "Ankit",
//     age : 21,
// }

// function display(newName) {
//     console.log(`I am ${newName} and my age is ${this.age}`)
// }

// display.apply(person, ["Person1"])
// display.call(person, "Person2")

// EvenListeners on Objects

const person = {
    name : "Ankit",
    age : 21,
    display : function() {
        console.log(`I am ${this.name} and my age is ${this.age}`)
    } 
}

const div = document.querySelector(".one")
console.log(div)
div.addEventListener('click', () => {
    div.innerHTML = person.age
})

// div.addEventListener('mouseover', () => {
//     div.innerHTML = person.name
// })

div.addEventListener('wheel', () => {
    div.style.fontSize = "50px"
})