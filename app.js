let num1 = 30;
let num2 = 45;

if(num1 == num2){
    console.log("the two numbers are equal.");
}
else{
    if(num1>num2) console.log("num1 is greater than num2");
    else console.log("the second number is greater");
}

let dayOfTheWeek = 15;

switch(dayOfTheWeek){
    case 1:
        console.log("It's Monday")
        break;
    case 2:
        console.log("It's Tuesday")
        break;
    case 3:
        console.log("It's Wednesday")
        break;
    case 4: 
        console.log("It's Thursday")
        break;
    case 5:
        console.log("It's Friday")
        break;
    case 6:
    case 7:
        console.log("It's the weekend!")
        break;
    default:
        console.log("That's not a day of the week.")
}