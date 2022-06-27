
// CONDITIONAL EXERCICES
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"


// ANSWER:
// let age = prompt("What is your age?");

// if (age < 18){
// alert("Sorry, you are too young to drive this car. Powering off")}

// else if (age == 18) {
// alert("Congratulations on your first year of driving. Enjoy the ride!")}

// else {
// alert("Powering On. Enjoy the ride!")}

// Exercise 2
// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }
// MY ANSWER: it will alert "Exactly!"
// ACTUAL ANSWER: "Exactly!"

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }
// ANSWER: 'Right!'
// ACTUAL ANSWER: 'Right!'

// OBJECTS EXERCISES

// Exercise 1
// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let database [
user1 = {
    username:"juli.ana",
    password:"12345"
}

user2 = {
    username:"fabi.ana",
    password:"54321"
}

user3 = {
    username:"luci.ana",
    password:"135"
}
]

let newsfeed = [
    obj1 = {username: user1.username
             timeline:"friends1"}
             
    obj2 = {username: user2.username
             timeline:"friends2"}

    obj3 = {username: user3.username
             timeline:"friends3"}
]


