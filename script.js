// TASK 1

// const checkArray = (a) => {
//     console.log(Array.isArray(a))
// }

// checkArray('w3resource')
// checkArray([1, 2, 'name'])

// TASK 2

const copyArray = (a) => {
    // var b = a.slice()
    // console.log(b)
    const b = JSON.parse(JSON.stringify(a))
    console.log(b)
}

copyArray([1, 2, 3])
copyArray([1, 2, [4, 0]])


// TASK 3

// const firstEle = (a, n) => {
//     if(!a.length || n < 1) return []
//     if(n == undefined) return a[0]

//     b = []

//     for(let i = 0; i < a.length && i < n; i++) {
//         b.push(a[i])
//     }

//     return b
// }

// console.log(firstEle([7, 9, 0, -2]))
// console.log(firstEle([],3))
// console.log(firstEle([7, 9, 0, -2],3))
// console.log(firstEle([7, 9, 0, -2],6))
// console.log(firstEle([7, 9, 0, -2],-3))



// TASK 4

// const joinArray = (a) => {
//     // return JSON.stringify(a.join("+"))
//     return JSON.stringify(a.join(","))
// }

// const color = ["Red", "Green", "White", "Black"]
// console.log(joinArray(color))

// TASK 5

// const maxFreq = (a) => {
//     let mp = {}
//     let ele = a[0], freq = 0

//     a.forEach((item, index) => {
//         if(!mp[item]) mp[item] = 1
//         else mp[item] += 1

//         if(freq < mp[item]) {
//             ele = item
//             freq = mp[item]
//         }
//     })

//     console.log(ele + " ( " + freq + " times )")
// }

// const a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, 3, 3]
// maxFreq(a);



