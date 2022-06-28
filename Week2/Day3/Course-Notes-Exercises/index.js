// Exercise 1
// Create a structured HTML file linked to a JS file

// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

// for (let i = 0; i < 16; i++){
//     if (i % 2 === 0)
//     console.log(i + " is even.")

//     else if (i % 2 !== 0)
//     console.log(i + " is odd")
// }

// Exercise 2
// 1. Write a JavaScript for loop that will go through the variable names.

// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

let names= ["john", "sarah", 23, "Rudolf",34];

       
   
      for (x of names) 
        if (isNaN(x) && x.charAt(0) !== x.charAt(0).toLowerCase()){
              names [1] == names.charAt(0).toUpperCase + x.slice(1);}
              
        else {names.splice(x, 1)

        }    
        
        console.log(names)
            

     
        