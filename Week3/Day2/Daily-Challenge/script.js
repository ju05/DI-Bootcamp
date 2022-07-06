// Instructions
// Get the value of each of the inputs in the HTML file when the form is submitted. 
let _stories;
let _noun = document.forms[0].elements[0]
let _adjective = document.forms[0].elements[1]
let _person = document.forms[0].elements[2]
let _verb = document.forms[0].elements[3]
let _place = document.forms[0].elements[4]
let _form = document.getElementById("libform")


_form.addEventListener("submit", function (event){
    event.preventDefault()
     initializeStorie()
       madLibs()
})

function initializeStorie(){

_stories = {
story1 : "In Israel , the birthday person wears a "+ _noun.value.value + " at the party, so she/he looks " +_adjective.value + ".The we all took selfies witn " + _person.value + _verb.value + "our new" + _noun.value + "and show them on " + _place.value + ".",
story2 : "You might think you need to be " +_adjective.value+ " in the " +_place.value+  " if the " +_adjective.value+ " is too strong, or if it is " +_person.value+ " season. But a more imminent danger is being " +_verb.value+ " in the " + _noun.value+ " of matkot (paddle balls). On the beach, it feels like it is Israel's national sport! I can't even imagine a time at the beach without " +_verb.value+ " the sound of " +_adjective.value+  +_verb.value+ "ing on paddles.",
story3 : "The second I entered the " +_place.value+ ", all my senses sprung to life. " +_person.value+  " was shouting out what she/he was selling. The " +_noun.value+ ", vegetables, nuts, and gummies—were so vivid, I might have even " +_verb.value+ " a little. Everything smelled so " +_adjective.value+ " and fresh…"
}
}

function madLibs(){
    
    // concat the shuffle number in the word "story" so it will be story1or2or3
    alert(_stories['story'+suffle()]) 
}

function suffle(){
    let values = _stories.value;
    return Math.floor( Math.random()*3)+1
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