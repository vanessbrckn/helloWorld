// Objects!

let user = {
    name: "Martha",
    age: 30
};

// // adding property to object.
// user.isAdmin = true;
// console.log(user.isAdmin)

// //this prints all three properties now.
// console.log(user)

// delete user.age;

// // now the age property is no longer part of this object
// console.log(user)

let newUser = {
    name: "Alice",
    age: 30,
    //you can do this
    "likes birds": true
}

//but not this
//console.log(user."likes birds")

//but you can do this.
console.log(newUser["likes birds"])

delete newUser["likes birds"];

console.log(newUser)

//-------------For In Loop------------

for (let key in user){
   // console.log(key) //prints the properties
   // console.log(user[key]) // prints the values.
    console.log(key + " : " + user[key] )
}

//----- const object
const user2 = {
    name: "Will",
    sizes: {    //object in an object
        height: 185,
        width: 150
    },
    // sayHi: function(){ // funtion in an object
    //     console.log("hello there")
    // }
    sayHi(){
        console.log("hello there") //cleaner code
    },
    sayName(){
        console.log(this.name); //print name can also do user.name
    }
}

console.log(user2.sizes.height)
user2.sayHi(); //console print in function

//----------this

user2.sayName();

//--------------- challenge

let customer = {
    first_name: "Elizabeth",
    last_name: "Carpenter",
    phone: "555-555-5555"
}

for (key in customer){
    console.log(key+" : "+customer[key])
}
console.log(customer);

// not in lesson: array of objects >:)

const customers = [
    {name: "Jill", age: 30, active: true},
    {name: "Martha", age:50, active: false},
    {name: "August", age: 29, active: true}
];

customers.forEach(customer => {
    console.log(`${customer.name} is ${customer.age} years old, and `);
    if(customer.active) console.log("is active");
    else console.log("is not active");
  });
  

