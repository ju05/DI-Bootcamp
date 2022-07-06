// // Retrieve the form and console.log it.
let _form = document.querySelector("form");
// console.log (_form);
// // Retrieve the inputs by their id and console.log them.
let _fname = document.getElementById("fname");
let _lname = document.getElementById("lname");
// console.log(_fname, _lname);
// Retrieve the inputs by their name attribute and console.log them.
let _fnameAtt = _fname.getAttribute("name")
let _lnameAtt = _lname.getAttribute("name")
console.log(_fnameAtt, _lnameAtt)
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
_form.addEventListener("submit", function (event){
    event.preventDefault()
    sendData()
})

// get the values of the input tags,
// make sure that they are not empty,
let _userAnswers = []
function sendData(){

    if (_fname.value == "" || _lname.value == ""){
        alert("Enter a valid name")
    }
    else {
        
        _userAnswers.push(_fname.value)
        _userAnswers.push(_lname.value)

    }
    
    
    createli()
}
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
function createli(){
    let _ul = document.querySelector("ul")
    for (let i = 0; i < _userAnswers.length; i++) {        
        let _il = document.createElement("li")
        _il.innerText =_userAnswers[i]
        _ul.appendChild(_il)              
    }
}
