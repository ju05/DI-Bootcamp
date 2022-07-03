// Exercise 1 : Evaluation
// Evaluate the comparisons found below:
// 5 >= 1
// prediction = true
// result = true
//     0 === 1
// prediction = false
// result = false
//     4 <= 1
// prediction = false
// result = false
//     1 != 1
// prediction = false
// result = false
//     "A" > "B"
// prediction = false
// result = false
//     "B" < "C"
// prediction = true
// result = true
//     "a" > "A"
// prediction = true
// result = true
//     "b" < "A"
// prediction = false
// result = false
//     true === false
// prediction = false
// result = false
//     true != true
// prediction = false
// result = false


// Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods
// Examples
// "2,3"➞ 5
let str = "1,5,3,6,7,8,4,3,22,5,677"
let num = str.split(",")
let sum = 0
for (let i = 0; i < num.length; i++) {

}

console.log(sum)

// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"
// let phrase = prompt("enter a sentence with 'Nemo'")
// let start = phrase.indexOf("Nemo")
// console.log(start);
// console.log(start+4);
// console.log(phrase.substring(start,start+4));

// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"

let number = Number(prompt("enter a number"));
let O = "o"
let OupperCase = "O"

if (number < 2){
    prompt("Boom!")
}
else if (number % 2 === 0 ){
    prompt("B" + O.repeat(number) +"m!")
}
else if (number % 5 === 0 && number % 5 != 0){
    prompt("B" + OupperCase.repeat(number)+"M")
}
else if (number % 2 === 0 && number % 5 === 0){
    prompt("B" + OupperCase.repeat(number) +"M!")
}
else {
    prompt("B" + O.repeat(number)+"m")
}
