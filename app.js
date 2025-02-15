// Functions and Iterations (ES6)

doubleNum = (x) => x * 2;

num = 10;

console.log("doubleNum = " +doubleNum(num));

//spread operator creates a copy instead of a reference

const listC = [1,2,3];
const listD = [...listC]; //spread
listD.push(4);

console.log("spread example : "+listD);

//merging with a spread operator
 const mergedList = [...listC, ...listD];

 console.log("merge using spread: "+ mergedList);

 //merging objects 
 const obj1 = {a : 1, b : 2};
 const obj2 = { c : 3};

 const mergedObj = {...obj1, ...obj2};

 console.log("merged object: ", mergedObj); // just learned you can print an object 
 // by not joining it to the existing string. I must've forgotten about that.

 //every and some
let numbers = [1,2,3,4,5,4,3,2,1];
let everyResult = numbers.every((item, index,array) => item > 2);
console.log(everyResult); // false

let someResult = numbers.some((item, index, array) => item > 2);
console.log(someResult); // true

//filter - uses the function to decide what array items to return

let filterResult  = numbers.filter(item => item > 2); // don't technically need the unused parameters
console.log(filterResult) // [3,4,5,4,3]

//map - returns an array that has been manipulated by map
let mapResult = numbers.map(item => item * 2);
console.log(mapResult) // [2, 4,6,8,10, 8, 6, 4, 2]

//forEach - does not have return, runs function on each item.
numbers.forEach(item => {
    item = item+5;
    console.log(item); // 6 /n 7 /n, ect
    //do something here
})
console.log(numbers); //[1, 2, 3, 4, 5, 4, 3, 2, 1]
