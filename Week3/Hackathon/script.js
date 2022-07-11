let main_col = 7;
let main_row = 10;
let main_count = main_col * main_row;
let count = 30;
let score = []
let countScore = score.length

// putting the created divs in a array i can use them in random position 
// after that in order to run them transparent:
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
let popupLoose = document.getElementById("popUp-overlay-loose")

// creating the div with class name "mainDiv i", so after that i can use the randomly and manipulate them in css 
for (let i = 0; i < main_count; i++) {
    let div = document.createElement('div');
    main.appendChild(div);
    div.classList.add("mainDiv")
    div.classList.add(i)
    div.addEventListener("click",listener,true)
    divs.push(div)
}
// the function created to make sure that just the transp div can be changed to white
function changeBg(div){
    if (div.style.backgroundColor == "transparent" ){
        div.style.backgroundColor = "#fefefe"   
                          
    
    }
}
// creating random div to turn to transparent
function randomDiv(random) {
    return Math.floor(Math.random() * main_count)
}


function win(){
    let popupWin = document.getElementById("popUp-overlay-win");
    popupWin.style.display = "block";
    let win_close_btn = document.getElementById("win-close-btn");
            win_close_btn.addEventListener("click", function(){
                location.reload();
        })  
    }


function outOftime(){
    let popupOutofTime = document.getElementById("popUp-overlay-out-of-time")      
    popupOutofTime.style.display = "block";
    let tryAgain = document.getElementById("tryAgain");
    let close_btn= document.getElementById("close-btn");
    tryAgain.addEventListener("click", function(){
        location.reload()
    })
    
}
function loose(){
    let popupLoose = document.getElementById("popUp-overlay-loose");
    popupLoose.style.display = "block"
    let tryAgain = document.getElementById("tryAgain2");
    let close_btn= document.getElementById("close-btn2");
    tryAgain.addEventListener("click", function(){
        location.reload()
    })
    

}
let resume = document.getElementById("resume")
   resume.addEventListener("click", function(){
    location.reload()});

// ading and removing eventListener so the user must click within 3 sec or the div will still transparent
play.addEventListener("click", function() {
    
    let timer = setInterval(function(){
    document.getElementById("time").innerHTML="TIME : "+count;
    count--;
    
    }, 1000);
       

    let speed2 = setInterval(function() {
        let div = divs[randomDiv()]
        div.style.backgroundColor = "transparent";
                        
            setTimeout(function(){
            div.removeEventListener('click', listener, true);
            
                                  
            },3000);

            if (count === 0 && score.length > 50){
                count == 0
                clearInterval(speed2);
                clearInterval(timer); 
                loose()       }  
            else if (count == 0 && score.lenght < 60){
                clearInterval(speed2);score.length >= 70 && count > 0
                clearInterval(timer); 
                loose()}
            else if (count == 0 && score.lenght > 60){
                clearInterval(speed2);
                clearInterval(timer); 
                loose()}                   
    }, 3000)   
    
    let difficult2 = setTimeout(function(){
    let speed1 = setInterval(function() {
        let div = divs[randomDiv()]
        div.style.backgroundColor = "transparent";         
                     
        setTimeout(function(){
            div.removeEventListener('click', listener, true); 
            
            },3000)
            if (count === 0 && score.length <= 50){
                count == 0
                clearInterval(speed2);
                clearInterval(timer); 
                loose()       }  
            else if (score.lenght < 70 && count === 0){
                clearInterval(speed2);
                clearInterval(timer); 
                loose()}
            else if (score.length > 70){
                clearInterval(speed2);
                clearInterval(timer); 
                loose()} 
    }, 1000)
   },10000)
    let superSpeed = setInterval(function(){
        let div = divs[randomDiv()]
        div.style.backgroundColor = "transparent";
                
        setTimeout(function(){
            div.removeEventListener('click', listener, true);
            
        },3000)

        if (count === 0 && score.length <= 100){
            count == 0
            clearInterval(speed2);
            clearInterval(timer); 
            loose()       }  
        else if (count === 0 && score.lenght <= 120){
            clearInterval(speed2);
            clearInterval(timer); 
            loose()}
        else if (count === 0 && score.length >= 150){
            clearInterval(speed2);
            clearInterval(timer); 
            loose()}  
    }, 500)
  
})


    














