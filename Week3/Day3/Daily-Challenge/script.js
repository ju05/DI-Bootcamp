let _form = document.getElementById("myForm");
let _text = document.getElementById("text");
let _letters = /^[A-Za-z]+$/
let _answer = []

_form.addEventListener("submit", function (event){
    event.preventDefault()
    if(_text.value.match(_letters)){
        sendData()
    }
    else{ 
        alert("Please enter a text just with letters.")
    }    
})

function  sendData(){
    _answer.push(_text.value)
    console.log("got it")
    
}