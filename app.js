// demo 

let sum = (a, b) => a + b;

console.log(sum(1,2));

let sayHi = () => console.log("Hello");
sayHi()

//more complex

let sum2 = (a,b) => {
    let result = a+b;
    console.log(result);
}

sum2(2,3) // 5

//Spread Operator
function addFour(a, b, c, d){
    return a+b+c+d;
}

let numbers = [1,2,3,4];

console.log(addFour(...numbers)); //10

let arr1 = [1,2,3,4];

let plus5 = arr1.map( val => val+5);
console.log(plus5);

// above same as: 
// let plus5 = arr1.map( val => {
//  return val+5 
//})

//Filter 

let even = arr1.filter( val => {
    return val%2 == 0;
})
console.log(even); // [2,4]

// forEach()

let animals = ["cat", "dog", "fish"];
animals.forEach(animal => console.log(animal));

// Template Literals

const person = "Justin"
const str1 = `hello, ${person}`
console.log(str1);

let personObj = {
    fn: "Vanessa",
    ln: "Bracken"
};
const str2 = `hello, ${personObj.fn} ${personObj.ln}`
console.log(str2);