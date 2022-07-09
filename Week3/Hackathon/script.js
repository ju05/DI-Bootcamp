let main_col = 10;
let main_row = 10;
let main_count = main_col * main_row;
// putting the created divs in a array i can use them in random position 
// after that in order to run them red:
let divs = []
// let usedDivs = []
// added the function to change BgColor insed a variable so the "removeEventListener" could work
let listener = function(){
    changeBg(this)
}

let body = document.querySelector("body")
let mainDiv = document.querySelectorAll("mainDiv")
let main = document.querySelector('#main');
let play = document.getElementById("play")
let div = document.createElement('div');

// creating the div with class name "mainDiv i", so after that i can use the randomly and manipulate them in css 
for (let i = 0; i < main_count; i++) {
    let div = document.createElement('div');
    main.appendChild(div);
    div.classList.add("mainDiv")
    div.classList.add(i)
    div.addEventListener("click",listener,true)
    divs.push(div)
}

// the function created to make sure that just the red div can be changed to grey
function changeBg(div){
    if (div.style.backgroundColor == "transparent" ){
        div.style.backgroundColor = "black" 
    }
}
// creatind random div to turn to red
function randomDiv(random) {
    return Math.floor(Math.random() * main_count)
}

// ading and removing eventListener so the user must click within 2 sec or the color will 
// continue red
play.addEventListener("click", function() {
    let speed2 = setInterval(function() {
        let div = divs[randomDiv()]
        div.style.backgroundColor = "transparent";
        
        setTimeout(function(){
            div.removeEventListener('click', listener, true);

        },3000)
    }, 2000)
    
    let difficult2 = setTimeout(function(){
    let speed1 = setInterval(function() {
        let div = divs[randomDiv()]
        div.style.backgroundColor = "transparent";
        setTimeout(function(){
            div.removeEventListener('click', listener, true);

        },3000)
    }, 1000)
   },7000)
   let difficult3 = setTimeout(function(){
    let superSpeed = setInterval(function() {
        let div = divs[randomDiv()]
        div.style.backgroundColor = "transparent";
        setTimeout(function(){
            div.removeEventListener('click', listener, true);

        },2000)
    }, 500)
   },12000)      
})

let resume = document.getElementById("resume")
resume.addEventListener("click", function(){
    location.reload()
});
window.onload(function playAudio() {
    document.getElementById("audio").play();
})
// function loose(){
//     if (usedDivs.length == divs.length * 0.7){

//     }
// }











