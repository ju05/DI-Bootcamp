// Exercise 1:
// Using this array :

// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// if i dont know where banana is a can use .indexOf() to find it

// fruits.shift();
let index0fBanana = fruits.indexOf("Banana");
console.log(index0fBanana);
fruits.splice(index0fBanana,1);
// OR
// fruits.slice(index0fBanana,index0fBanana+1);
fruits.sort();
fruits.push("Kiwi");
let indexOfApple = fruits.indexOf("Apple");
console.log(indexOfApple);
fruits.splice(indexOfApple,1);
// fruits.splice(0,1);
fruits.reverse();
console.log(fruits);

// Exercise 2:
// Using this array :

// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits [1] [1] [0]);

// let moreFruits =
             // array1 ["Banana", 
             // array2   ["Apples", 
             // array3      ["Oranges"], 
             //                 "Blueberries"]
             //                         ];

