let divs = document.querySelector('inner1');
   console.log(divs.lastElementChild);   
  
//    DOM
//    What is DOM (Document Object Model)
   
//    JavaScript can change all the HTML elements in the page
//    JavaScript can change all the HTML attributes in the page
//    JavaScript can change all the CSS styles in the page
//    JavaScript can remove existing HTML elements and attributes
//    JavaScript can add new HTML elements and attributes
//    JavaScript can react to all existing HTML events in the page
//    JavaScript can create new HTML events in the page
   
//    Finding HTML elements by id
//    Finding HTML elements by tag name
//    Finding HTML elements by class name
//    Finding HTML elements by selectors
   
   
//    Finding HTML Elements
//    Method	                                Description
//    document.getElementById('root')	        Find an element by element id
//    document.getElementsByTagName('div')	  Find elements by tag name
//    document.getElementsByClassName('a')	  Find elements by class name
//    document.querySelector('#root .a')
//    document.querySelectorAll('#root .a')
   
   
//    Changing HTML Elements
//    Property	Description
//    element.innerHTML/innerText =  new html content	Change the inner HTML of an element
//    element.attribute = new value	Change the attribute value of an HTML element
//    element.style.property = new style	Change the style of an HTML element
//    element.setAttribute(attribute, value)	Change the attribute value of an HTML element
   
   
//    Adding and Deleting Elements
//    Method	Description
//    document.createElement(element)	Create an HTML element
//    document.removeChild(element)	Remove an HTML element
//    document.appendChild(element)	Add an HTML element
//    document.replaceChild(new, old)	Replace an HTML element
let uls = document.getElementsByTagName("ul")
creating Element
// you create Element in the document, so let _li = document.createElement("which element? - il")
// you put the inner text in the variable that was created for ex.: _il.innerText = "bla bla"
// you append the element that was created using the parent tag, for ex.: _ul.appendChild("il")
let li = document.createElement("li");
li.textContent = 7;
li.className.add("my-class");
li.setAttribute("id", "myli");
li.style.color = red;
uls[0].appendChild(li)

// DOM Selectors
// --------------
// getElementById
// getElementsByTagName
// getElementsByClassName

// querySelector
// querySelectorAll

// getAttribute
// setAttribute

// ##Changing Styles
// style.{property} //ok

// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children
// childNodes

// document.createElement;
// appendChild;
// removeChild;
// replaceChild;

// ##It is important to CACHE selectors in variables


