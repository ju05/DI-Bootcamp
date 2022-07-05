// Instructions
// Get the value of each of the inputs in the HTML file when the form is submitted. 
let _form = document.getElementById("libform")
let _noun = document.forms[0].noun.value;
let _adjective = document.forms[0].adjective.value;
let _person = document.forms[0].person.value;
let _verb = document.forms[0].verb.value;
let _place = document.forms[0].place.value;

story1 = "In Israel , the birthday person wears a "+ _noun + " at the party, so she/he looks " +_adjective + ".The we all took selfies witn " + _person + _verb + "our new" + _noun + "and show them on " + _place + "."

_form.addEventListener("submit", function (event){
    event.preventDefault()
    madLibs()
})


function madLibs(){
    alert(story1)
}

// Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, 
// when clicked the button should change the story currently displayed 
// (but keep the values entered by the user). 
// The user could click the button at least three times and get a new story. 
// Display the stories randomly.