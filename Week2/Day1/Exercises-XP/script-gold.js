// Exercise 1 : Favorite Color
// Instructions
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentence = ["my","favorite","color","is","blue"];
let fruits = ["my","favorite","fruit","is","peach"];
let favorites = sentence.concat(fruits);
let favorite = sentence.indexOf("favorite")
console.log(favorite);


// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
let str1 = "Hello";
let str2 = "World";
// 2. Slice out and swap the first 2 characters of the two strings from part 1.
firstPart = str1.substring(0,2)
secPart = str2.substring(0,2)
lastIndex1 = str1.substring(2)
lastIndex2=str2.substring(2)
newFirstWord = secPart.concat(lastIndex1)
newSecondWord = firstPart.concat(lastIndex2)
newPhrase = newFirstWord.concat(" ",newSecondWord)
console.log(newPhrase)

// firstWord = str1.replace(str2);
// secondWord = str2.replace(str1);
// space = firstWord.concat(" ")
// finalStr = space.concat(secondWord);
// console.log(finalStr);
// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// 4. Finally console.log the new concatenated string.
// Some Examples

// let str1 = "mix";
// let str2 = "pod";
// let newWord should be equal to 'pox mid'

// let firstWord = "Hello";
// let secondWord = "World";
// let thirdWord should be equal to 'Wollo Herld'


// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:
// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!
let num1 = Number(prompt("Entern first number:" ));
let num2 = Number(prompt("Entern first number:" ));
let sum = num1 + num2;
alert(sum)
