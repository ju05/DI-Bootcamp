// Declare a global variable named allBoldItems.
let allBoldItems = []
let _p = document.querySelector("p")
function getBold_items(){    
   for (let i = 0; i < _p.children.length; i++) {
    if (_p.children[i].tagName == "STRONG"){
        allBoldItems.push(_p.children[i])
    }    
   }
   console.log(allBoldItems)
}
getBold_items()


_p.addEventListener("mouseover", highlight)
function highlight(){
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue"
        
    }
}


_p.addEventListener("mouseout", return_normal)
function return_normal(){
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black"
        
    }
}
return_normal()

_p.addEventListener("onmouseover", highlight)
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called return_normal() that changes the color of all the bold text back to black.

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example