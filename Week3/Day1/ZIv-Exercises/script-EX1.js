// Exercise 1: Traversing the DOM
// Knowing how to traverse the DOM using JavaScript provides a foundation
// to altering an HTML page in real time.
// Using the HTML markup in Listing 1, perform these tasks:

// 1. Use the firstElementChild / firstChild property to access an element.
let firstChild = document.getElementById('page');
console.log(firstChild.firstElementChild)
console.log(firstChild.firstChild)

// 2. Use the lastElementChild / lastChild  property to access an element.
let lastChild = document.getElementById('content');
console.log(lastChild.lastElementChild)
console.log(lastChild.lastChild)

// 3. Use the nextElementSibling / nextSibling  property to access an element.
let nextEl = document.getElementById('page');
console.log(nextEl.nextElementSibling)
console.log(nextEl.nextSibling)

// 4. Use the previousElementSibling / previousSibling  property to access an element.

let PrevEl = document.getElementById('header');
console.log(PrevEl.previousElementSibling)
console.log(PrevEl.previousSibling)

// 5. Use the parentNode property to access an element.
let ParNode = document.getElementsByName('Copy');
console.log(ParNode.parentNodes)

// 6. Use the childNodes property to access a group of child elements.

let group = document.getElementById('page')
console.log(group.childNodes)

// Exercise 2: Targeting nodes 
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1, perform the following tasks:
// 1. Retrieve the value of a node using nodeValue / innerText / innerHTML.

// 2. Change the value of a node using nodeValue / innerText / innerHTML.
// 3. Retrieve the value of a node attribute.
// 4. Change the value of a node attribute.

// Exercise 3: Manipulating the DOM
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
// 1. Use the appendChild method to add a node.
// 2. Use the insertBefore method to add a node.
// 3. Use the removeChild method to remove a node.
// 4. Use the replaceChild method to replace a node.