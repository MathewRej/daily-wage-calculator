const groupBy = require("core-js/actual/array/group-by");
const users = [
    {
        name: 'mathu',
        age: 21,
        gender: 'male'
    },
    {
        name: 'manu',
        age: 20,
        gender: 'male'
    },
    {
        name: 'anu',
        age: 23,
        gender: 'female'
    },
    {
        name: 'meenu',
        age: 19,
        gender: 'female'
    },
    {
        name: 'jose',
        age: 21,
        gender: 'male'
    },
    {
        name: 'Aann',
        age: 22,
        gender: 'female'
    },
    {
        name: 'alan',
        age: 22,
        gender: 'male'
    },
    {
        name: 'mathew',
        age: 21,
        gender: 'male'
    },
    {
        name: 'anju',
        age: 25,
        gender: 'female'
    },
    
]
// for(i=0; i< users.length; i++){
//     console.log(users[i].name)
// }

// // users.map((user) => console.log(user.gender))
const res = users.groupBy((user) => user.gender)
console.log(res)
// const inventory = [
//     { name: 'asparagus', type: 'vegetables', quantity: 5 },
//     { name: 'bananas',  type: 'fruit', quantity: 0 },
//     { name: 'goat', type: 'meat', quantity: 23 },
//     { name: 'cherries', type: 'fruit', quantity: 5 },
//     { name: 'fish', type: 'meat', quantity: 22 }
//   ];

//   inventory.map(item=> item.type)