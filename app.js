// React JS
let now = new Date();

console.log(now); 

// time functions

let updateInterval = setInterval(checkForUpdates, 6000);

// function inputs treated as an array

function sayHi(name,message){
    console.log(
        `Hello ${name}, ${message}`
    );
}

// above is same as this: 
function sayHi2 () {
    console.log(`Hello ${arguments[0]}, ${arguments[1]}`)
}

// Events are user driven
let okay = document.querySelector('#confirmUpdateDialog');

 // Promises simplify ASynch programmming. An object that represents
 // the result of an asynch computation. No way to synchronously get
 // the value of a promise. Can be benificial when there are nested
 // call backs. 

 getJSON(url).then(jsonData => {
    //function that will be asynchronously invoked
    // with the parsed JSON value when it becomes available.
 });

 // in this example, if the url being passed to getJSON gives a valid response
 // then displayUserProfile will run, otherwise handleProfileError does.
 getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);
