// console.log("Hello, World!");

// console.log("This is a sample Node.js application.");

// //string
// let name = "Kehinde Akereja";
// console.log(name)
// //number
// const age = 25;
// console.log(age);

// //boolean
// var isStudent = true;
// console.log(isStudent);


// //sting interpolation
// //let sentence = `my name is ${name} and I am ${age} years old. Am I a student? ${isStudent}`;
// //console.log(sentence);

// //arithmetic operations

// //let a = 40;
// //let b = 20;

// //let sum = a + b;
// //let difference = a - b;
// //let product = a * b;
// //let quotient = a / b;
// //let power = a ** b;
// //let root = Math.sqrt(a);



// //console.log(`The sum of ${a} and ${b} is ${sum}`);
// //console.log(`The difference of ${a} and ${b} is ${difference}`);
// //console.log(`The product of ${a} and ${b} is ${product}`);
// //console.log(`The quotient of ${a} and ${b} is ${quotient}`);
// //console.log(`The power of ${a} raised to ${b} is ${power}`);
// //console.log(`The root of ${a} is ${root}`);


// //objects

// //let person = {
// //    name: "Kehinde Akereja",
// //    age: 25,
// //    isStudent: true,
// //};


// let q = "Kehinde";
// let r = "Kehinde Akereja";

// if(q > r){
//     console.log("true");
// }else if(q < r){
//     console.log("false");
// }else if(q == r){
//     console.log("Both strings are equal");
// }else{
//     console.log("Both strings are not equal");
// }


// let i = 0;

// while(i < 5){
//     console.log(i);
//     i++;
// }

// for loop


for(let oranges = 0; oranges <= 7; oranges++){

    //what happens
    console.log(`oranges is = ${oranges}`);
}

//Akereja Kehinde.

// && logical and
// || logical or

// && ||

let age = 25;
let hasId = true;

if (age ==25 || hasId == true){
    console.log("it is true");
}
else
{
    console.log("it is false");
}


let password = "variable";
let username = "variable";


if (username == "" && password == ""){
    console.log("Login successful");
}else{
    console.log("invalid username or password");
}


// switch case:

let fruit = "apple";

switch(fruit){
    case "orange":
        console.log("This is orange, but not the correct fruit.");
        break;

    case "apple":
        console.log("This is apple, but not the correct fruit.");
        break;

        case "mango":
        console.log("This is mango, the correct fruit.");
        break;


    default:
        console.log("Please select a fruit");
}



function greet(cohortname){
    console.log("Welcome " + cohortname)
}


(greet("Hajime"));


const greetk = (username,password) => {
    if (username == "" && password == "")

        //do something
console.log(greetk("Welcome " + "username"))

| 
   console.log (username != "" && password != "");
    console.log("Invalid username or password");
}

 






