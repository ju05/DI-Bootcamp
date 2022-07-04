// 🌟 Exercise 2 :
// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// let div = document.getElementsByClassName('list')
// div[0].lastElementChild.textContent= "Richard";
// // Change each first name of the two <ul>'s to your name.
// let ul1 = document.getElementsByTagName('ul')
// ul1[0].firstElementChild.textContent = "Juliana"
// let ul2 = document.getElementsByTagName('ul')
// ul1[1].firstElementChild.textContent = "Juliana"

// // Delete the <li> that contains the text node “Sarah”.
// let delSarah = document.getElementsByTagName('li')
// ul1[1].firstElementChild.nextElementSibling.remove()

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>

// 🌟 Exercise 2 : Users And Style
// Add a “light blue” background color and some padding to the <div>.
// let bluediv = document.getElementsByTagName('div');
// bluediv[0].style.backgroundColor = "Lightblue"
// bluediv[0].style.padding = "10px"

// // Do not display the <li> that contains the text node “John”.
// let john = document.getElementsByTagName('ul');
// john[0].firstElementChild.remove()

// // Add a border to the <li> that contains the text node “Pete”.
// let pete = document.getElementsByTagName('ul');
// pete[0].firstElementChild.style.padding = '10px'
// // Change the font size of the whole body.
// let body = document.getElementsByTagName("body");
// body[0].style.fontSize = "50px"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// 🌟 Exercise 3 : Change The Navbar
// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, 
// using the setAttribute method.
let changeA = document.getElementsByTagName("div")
changeA[0].setAttribute("id","socialNetworkNavigation")

// // We are going to add a new <li> to the <ul>.
let addLi = document.getElementsByTagName("ul")
// // First, create a new <li> tag (use the createElement method).
let li = document.createElement("li")
// // Create a new text node with “Logout” as its specified text.
li.textContent = 'logout';
// // Append the text node to the newly created list node (<li>).
// // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
addLi[0].appendChild(li)

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
let allBooks = [{title: "1984",
                author: "George Owell",
                image: "url=",
                alreadyRead: true,},

                {title: "The book of disquiety",
                author: "Fernando Pessoa",
                image: "url=",
                alreadyRead: true,}];
console.log(allBooks)

let access = document.querySelector("listBooks");
let createTable1 = access.createElement("table");
let createBody = document.createElement("body")
function addTableRows(){ 
for (let i = 0; i < 4; i++) {
    let row = document.createElement("tr")
    for (let j = 0; j < 5; j++) {
    let column1 = document.createElement("th")
    row.textContent(allBooks.title)
         for (key in allBooks) {
            row[0].textContent = key
            row++
            addrow.appendChild(th)



            
         }

        
    }   
    
    row.textContent(allBooks.title)
        row.textContent(allBooks.author)
        row.textContent(allBooks.image)
        row.textContent(allBooks.alreadyRead)
            
        }
        
    }
    
function addTableColumns(){ 
for (let i = 0; i < 5; i++) {
    let column = document.createElement("td")
    for (let l = 0; l < 5; l++) {
        column.textContent(allBooks.values())
        for (let i = 0; i < 5; i++) {
            addrow[0].appendChild(td)
            
        }
        
    }
    
}
}





// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.