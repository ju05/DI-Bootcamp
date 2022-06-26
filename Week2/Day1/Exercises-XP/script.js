
// EXERCISE 1
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// For example

// If your favorite food is "chocolate", 
// and your favorite meal of the day is "dinner", 
// you will console.log 
// I eat chocolate at every dinner

let favFood = "pao-de-queijo";
let favMeal = "breakfast";

console.log("I eat " + favFood + " at every " + favMeal + ".");

// Exercise 2 : Series
// Instructions
// Part I
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLenght = myWatchedSeries.length; 
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(" I watched " + myWatchedSeriesLenght + " series: " + myWatchedSeriesSentence + ".");


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries[2] = "friends";
myWatchedSeries.push("stranger things");
myWatchedSeries.unshift ("breaking bad");
myWatchedSeries.splice (1,1);
console.log(myWatchedSeries [1].charAt(2))
console.log(myWatchedSeries);


// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let celsius = 29;
let fahrenheit = (celsius / 5 *9 + 32);

console.log(celsius +"°C is " + fahrenheit.toPrecision(2) + "°F.");


// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

// console.log(2+3)
// // Prediction: It will output 5, because 2 and 3 are numbers
// // Actual: 5


// Using the code below:

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
//     // Prediction: 55 because it wll sum 34 and 21
//     // Actual:55

    a = 2;

    console.log(a+b) //second expression
//     // Prediction: 23 because the "a" value was set with "let", now it changed to 2. So 2+21
//     // Actual:



// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c?
// the value of c is undefined.


// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
//prediction:75 because 3 and 4 are numbers and 5 is a string 


// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

// typeof("potato")
// Prediction: Vegetable
// Actual: String


// What is the output of each of the expressions below?


console.log(typeof(15));

// Prediction:number
// Actual:number

console.log(typeof(5.5));

// Prediction:float
// Actual:number

console.log(typeof(NaN));

// Prediction:undefined
// Actual:number

console.log(typeof("hello"));

// Prediction:string
// Actual:string

console.log(typeof(true));

// Prediction:boolean
// Actual:boolean

console.log(typeof(1 != 2));

// Prediction:True
// Actual:boolean

console.log("hamburger" + "s");

// Prediction:"hamburgers"
// Actual:hamburgers

console.log("hamburgers" - "s");

// Prediction:"hamburger"
// Actual:NaN

console.log("1" + "3");

// Prediction:"13"
// Actual:13

console.log("1" - "3");

// Prediction: undefined
// Actual:-2

console.log("johnny" + 5);

// Prediction:johnny5
// Actual:johnny5

console.log("johnny" - 5);

// Prediction:undefined
// Actual:NaN

console.log(99 * "hello");

// Prediction:error
// Actual:NaN

console.log(1 != 1);

// Prediction:False
// Actual:

console.log(1 == "1");

// Prediction:True
// Actual:

console.log(1 === "1");

// Prediction:False
// Actual:


// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?


console.log(5 + "34");
// Prediction:534
// Actual:534

console.log(5 - "4");
// Prediction:1
// Actual:1

console.log(10 % 5);
// Prediction:0
// Actual:0

console.log(5 % 10);
// Prediction:0
// Actual:5

console.log("Java" + "Script");
// Prediction: JavaScript
// Actual:

console.log(" " + " ");
// Prediction:"  "
// Actual:"  "

console.log(" " + 0);
// Prediction:" "0
// Actual:" "0

console.log(true + true);
// Prediction:true
// Actual:2

console.log(true + false);
// Prediction:false
// Actual:1

console.log(false + true);
// Prediction:false
// Actual:1

console.log(false - true);
// Prediction:undefined
// Actual:-1

console.log(!true);
// Prediction:false
// Actual:false

console.log(3 - 4);
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill");
// Prediction:NaN
// Actual:NaN




