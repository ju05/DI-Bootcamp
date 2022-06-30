
// first part : asking for the input of the user as a Number:

// asking if the user wants to play:
let computerNumber = Math.floor(Math.random()*10)

function playTheGame(){
  let askconfirm = confirm("Do you want to play the game?")
    if (askconfirm){
        let userNumber = Number(prompt("Enter a number between 0 and 10"))
        checkNumber(userNumber)       
    }
    else{
        alert("No problem, Goodbye")
       
    }
}

// checking that the input is a Number and if not, asking again:
function checkNumber(userNumber){
    if (isNaN(userNumber)){
        console.log ("asking again for a number");
        userNumber = Number(prompt("It must be a number between 0 and 10"))   
        
    }
    else {
        compareNumbers(userNumber, computerNumber)
    }
}

// comparing user and computer numbers:
function compareNumbers(userNumber,computerNumber){
    console.log("comparing" + userNumber,computerNumber)
let guessLimit = 3
let guessCounting = 0
    do {
        console.log("do",userNumber,computerNumber)
        if (userNumber < computerNumber){
        userNumber = Number(prompt("Your number is smaller then the computer's, guess again"))
        }        
    
        else if (userNumber > computerNumber){
        userNumber = Number(prompt("Your number is bigger then the computer's, guess again"))
        
        }
        else {
        alert("YOU WON!")
       }
       guessCounting ++ 
       
    }
    while (guessCounting < guessLimit);
    if (guessCounting >= guessLimit){
        alert("out of guesses!")
    }
    
}
    