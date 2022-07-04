// Using a DOM property, retrieve the h1 and console.log it.
let retH1 = document.querySelector("h1")
console.log(retH1)

// Using DOM methods, remove the last paragraph in the <article> tag.
let _parent = document.querySelector("article");
let _lastChild = _parent.lastElementChild
_parent.removeChild(_lastChild);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let _h2 = _parent.firstElementChild.nextElementSibling
_h2.addEventListener("click", function (){
    _h2.style.backgroundColor = "red"
})
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let _h3 = _h2.nextElementSibling
_h3.addEventListener("click", function (){
    document.querySelector("h3").style.display = "none"
})
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let _buttom = document.querySelector("button");
let _p = document.querySelectorAll("p");
_buttom.addEventListener("click", toBold)
function toBold () {
    for (let i = 0; i < _p.length; i++) {
        _p[i].style.fontWeight = "bold"        
    }  

}
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)