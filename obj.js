// DESTRUCTURE OBJEECTS 

const person = {
    name: "Pedro",
    age: 20,
    isMarried: false
};

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// console.log(`Hi, ${name} ${age} ${isMarried}`);

// the above can be destructured by 
const {name, age, isMarried} = person;
console.log(`Hi, ${name} ${age} ${isMarried}`);

// copying an object 
const person2 = {...person, name: "Jack"}
console.log(`Hi, ${name} ${age} ${isMarried}`);