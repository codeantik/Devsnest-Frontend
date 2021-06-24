const questions = [
    {
        "name":"what is your name ?",
        "answer" : "0",
        "options":[
              "Rajnikant",
              "Bheem",
              "Vilgax",
              "Ben 10"
          ]
      },
      {
          "name":"what song genre u like ?",
          "answer" : "2",
          "options":[
                "Hip Hop",
                "Jazz",
                "Rock",
                "Dubstep"
            ]
      },
      {
        "name":"what is your favourite marvel character ?",
        "answer" : "1",
        "options":[
              "Rajnikant",
              "Iron Man",
              "Vilgax",
              "Ben 10"
          ]
      },
      {
        "name":"what is your favourite dc character ?",
        "answer" : "0",
        "options":[
              "Superman",
              "Iron Man",
              "Vilgax",
              "Ben 10"
          ]
      },
      {
        "name":"what is your fastest man alive ?",
        "answer" : "2",
        "options":[
              "Rajnikant",
              "Iron Man",
              "Barry Allen",
              "Ben 10"
          ]
      },
      {
        "name":"which is the closest galaxy to Milky Way ?",
        "answer" : "3",
        "options":[
              "Rajnikant",
              "Iron Man",
              "Vilgax",
              "Andromeda"
          ]
      },
      {
        "name":"what is the name of Superman's planet?",
        "answer" : "0",
        "options":[
              "Krypton",
              "Granite",
              "Vilgax",
              "Diamond"
          ]
      }

]

const ques = document.querySelector('.name')
const opt = document.querySelectorAll('.lbl')
const btn = document.querySelector('.btn')
let i = 0
let score = 0
// console.log(ques, btn, opt, opt[0])


let question = questions[i]
ques.innerHTML = `${i + 1}. ${question.name}` 
opt[0].innerHTML += "a. " + question.options[0]
opt[1].innerHTML += "b. " + question.options[1]
opt[2].innerHTML += "c. " + question.options[2]
opt[3].innerHTML += "d. " + question.options[3]
let flag = false

btn.addEventListener('click', () => {
    i += 1
    if(i === questions.length) {
        alert("Quiz Completed")
        window.location.reload()
    }
    let question = questions[i] // 
    ques.innerHTML = `${i + 1}. ${question.name}`
    opt[0].innerHTML = "a. " + question.options[0]
    opt[1].innerHTML = "b. " + question.options[1]
    opt[2].innerHTML = "c. " + question.options[2]
    opt[3].innerHTML = "d. " + question.options[3]

    let allInp = document.querySelectorAll('input')
    Array.from(allInp).forEach(item => {
        item.checked = false
    })

})




document.querySelectorAll('input').forEach(item => {
    item.addEventListener('click', event => {
      let val = document.querySelector('input[name="option"]:checked').value
      console.log(val)
      if(val) {
          let ans = item.getAttribute("id")
          console.log(ans)
          let question = questions[i]
          if(question.answer === ans) {
              score++
              alert(`Correct answer. Your score is ${score}`)
          }
          else alert("Wrong answer")
        // let inp = document.querySelector('input[name="option"]:checked')
         // inp.setAttribute("value", "0")
       }
    })
})

// let allInp = document.getElementsByTagName("input");
// // console.log(allInp)
// for (let j = 0; j < allInp.length; i++) {
//     if(allInp[j].checked) {
//         let question = quesitons[i - 1]
//         let ans = allInp[j].getAttribute("id")
//         console.log(ans)
//         if(question.answer === ans) alert("Correct Answer")
//         else alert("Wrong Answer")
//     }
// }

// if(flag === true) {
//     i += 1
//     flag = false
// }



