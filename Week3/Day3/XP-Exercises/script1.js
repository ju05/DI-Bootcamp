// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function sayHello(){
    alert("Hello World")    
}
setTimeout(sayHello(),2000)
// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function addParagraph(){
let _container = document.getElementById("container");
let _newP = document.createElement("p");
let _addText = _newP.textContent = "Hello World";
_container.appendChild(_newP) } 

let _interval = setInterval(addParagraph,2000)

setTimeout(addParagraph(), 2000);

let _button = document.getElementById("clear")
_button.addEventListener("click", function (event){
    event.preventDefault()
    clearInterval(_interval)
})


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.