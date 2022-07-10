// Exercise 1 : List Of People
// Instructions
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// MY ANSWER:
let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people.pop();
people.push("Jason");
people.push("Juliana");

console.log(people.indexOf("Mary"));
let peopleCopy = people.slice(0,people.length-1);
console.log (peopleCopy)
console.log(people.indexOf("Foo"))
let last = people.pop()
console.log(last)

// // Part II - Loops
// // Using a loop, iterate through the people array and console.log each person.

// // Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// // Hint: take a look at the break statement in the lesson.

for (i of people){
    // console.log(i);
    if (i == "Jason"){  

    break; 
    }
    console.log(i);
}



// // 🌟 Exercise 2 : Your Favorite Colors
// // Instructions
// // Create an array called colors where the value is a list of your five favorite colors.
// // Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// // Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// // Hint : create an array of suffixes to do the Bonus

let colors = ["blue", "turquoise", "purple", "pink"]

for (x in colors) {
    x = 0
    // console.log(x "is my" x+1 +"nd choice")
}



// // // 🌟 Exercise 3 : Repeat The Question
// // // Instructions
// // // Prompt the user for a number.
// // // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// // // While the number is smaller than 10 continue asking the user for a new number.
// // // Tip : Which while loop is more relevant for this situation?

let number = prompt("Enter a number");
let num = Number(number)

while (typeof num == "number" && num < 10){
   
    number = prompt("Enter another number")
    num = Number(number)
   


}



// // 🌟 Exercise 4 : Building Management
// // Instructions:
// // Review About Objects
// // Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
let building = { numberOfFloors : 4,
        numberOfAptByFloor : {firstFloor : 3, secondFloor : 4, thirdFloor : 9, fourthFloor : 2,},
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {sarah: [3, 990],
                            dan :  [4, 1000],
                            david : [1, 500], },
                                                          }
// // building = {obj key:value, key:{obj as value with 4x key:value}, key: [arr with 3 indexes as value], key {with a obj as value with 3xkey:[3x arrays as values]}}


console.log(building.numberOfFloors);


// // Console.log how many apartments are on the floors 1 and 3.
let numberOfAptByFloor =   {firstFloor : 3, 
                            secondFloor : 4, 
                            thirdFloor : 9, 
                            fourthFloor : 2,};


console.log(Object.values(numberOfAptByFloor)[0],Object.values(numberOfAptByFloor)[2])


// // Console.log the name of the second tenant and the number of rooms he has in his apartment.

let nameOfTenants = ["Sarah", "Dan", "David"];
let numberOfRoomsAndRent =  {sarah: [3, 990],
                             dan :  [4, 1000],
                             david : [1, 500], };

console.log(nameOfTenants[1], Object.values(numberOfRoomsAndRent)[1,1])

// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
// // If it is, than increase Dan’s rent to 1200.

let sarah = [3, 990];
let dan =  [4, 1000];
let david = [1, 500];
    if (sarah[1]+david[1] > dan[1]){
        dan.pop()
        dan.push(1200)
    }
// console.log(dan[1])



// // 🌟 Exercise 5 : Family
// // Instructions
// // Create an object called family with a few key value pairs.
// // Using a for in loop, console.log the keys of the object.
// // Using a for in loop, console.log the values of the object.

let family = {mother: "Skyler", father: "Water", son:"R.J.", uncle:"Hank"}

for (i in family){
    console.log(i)
};

for (i of Object.values(family)){
    console.log(i)
};


// // Exercise 6
// // Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// };
// // Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// for (i of Object.entries(details)){
//     phrase = "";
    


// // Exercise 7 : Secret Group
// // Instructions
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let strNames = names.toString()
let societyName = []
// // A group of friends have decided to start a secret society. 
// // The society’s name will be the first letter of each of their names sorted in alphabetical order.
// // Hint: a string is an array of letters
// // Console.log the name of their secret society. The output should be “ABJKPS”

for (i of strNames){
       
    societyName.push()

}
console.log()