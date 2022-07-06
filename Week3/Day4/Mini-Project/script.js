let color_col = 3;
let color_row = 8;
let color_count = color_col * color_row;

let main_col = 60;
let main_row = 50;
let main_count = main_col * main_row;

let body = document.querySelector("body")
let mainDiv = document.querySelectorAll("mainDiv")
let sidebar = document.getElementById('sidebar');
let main = document.querySelector('#main');
let button = document.querySelector("button")
let savedColor = []
let mousedown = true;

document.body.addEventListener("mouseup", function(){
  mousedown = false
})
document.body.addEventListener("mousedown", function(){  
    mousedown = true;
})
for (let i = 0; i < color_count; i++) {
  let div = document.createElement('div');
  div.style.backgroundColor = generateRandomColor();
  sidebar.appendChild(div);
  div.setAttribute("class", "colorDiv")
  div.addEventListener("click", function(){
    savedColor.pop();
    savedColor.push(div.style.backgroundColor)})
}

for (var i = 0; i < main_count; i++) {
  let div = document.createElement('div');
  main.appendChild(div);
  div.setAttribute("class", "mainDiv")
  
  div.addEventListener("mouseover", function(){  
    if (mousedown == true){
    div.style.backgroundColor = savedColor[0]}  
    button.addEventListener("click", function(){
      div.style.backgroundColor = "darkgrey" })
  })
}
 
function generateRandomColor(){
  let letters = '0123456789ABCDEF'
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)]
  }
  return color;
}


