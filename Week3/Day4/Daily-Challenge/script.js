let listTasks = [];
let button = document.querySelector("button")
button.addEventListener("click", function(event){
    event.preventDefault();
    let text = document.getElementById("input")
    if (text.value.length > 0){
    listTasks.push(text.value)
    createTask(text.value)}
    else{ alert("Enter a valid word")}        
})
function createTask(text){    
    let list_tasks = document.querySelector(".listTasks");
    let i = document.createElement("i")
    i.classList.add('fa-solid');
    i.classList.add('fa-circle-xmark');
    // i.setAttribute("class","fa-solid fa-circle-x") here are two different classes: 1=fa-solid and 2=fa-circle-x
    list_tasks.appendChild(i)
    let input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    list_tasks.appendChild(input)
    let span = document.createElement("span")
    span.textContent = text
    list_tasks.appendChild(span)
}

let checkbox = document.getElementById(".input")
console.log(checkbox)


 



