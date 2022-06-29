// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops
// (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let str = "* "
for (let i=1; i<7; i++){
    console.log(str(i));
 

let sum = ""
for(let i=1; i<7; i++){
    for (let j = 0; j < i; j++){
         sum += str;

    }
}
}
    console.log(sum)