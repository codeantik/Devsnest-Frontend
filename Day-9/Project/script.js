"use strict"
const boxes = document.querySelectorAll('.box')
const booked = document.querySelector('.booked')
const remaining = document.querySelector('.remaining')
console.log(boxes)
console.log(booked)
console.log(remaining)
// booked.style.innerHTML = " 0"
// remaining.style.innerHTML = " 36"
let bookedCount = 0, remainingCount = 36
Array.from(boxes).forEach((box, i) => {
    box.addEventListener('click', () => {
        if(box.style.background != "rgb(243, 97, 97)") {
            box.style.background = "rgb(243, 97, 97)";
            bookedCount += 1
            remainingCount -= 1
        }
        else {
            box.style.background = "rgb(255, 255, 255)";
            bookedCount -= 1
            remainingCount += 1
        }
        // bookedCount += 1
        // remainingCount -= 1
        booked.innerHTML = "Booked Seats : " + bookedCount
        remaining.innerHTML = "Remaining Seats : " + remainingCount
    })
})