// Exercise 1
// 1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge

// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)

// 4. Call the function


function familyAges(myAge){
    let mumAge = myAge * 2;
    let dadAge = mumAge * 1.2;
    return (myAge + " is my age, " + mumAge+ " is my mum age, " + dadAge + " is my dad age, ")

}
console.log(familyAges(15))



