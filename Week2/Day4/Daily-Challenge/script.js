// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

let words = ["Hello", "World", "in", "a", "frame"];

function longestWordLength(arr) {
  let len = arr[0].length;
  for (let i = 1; i < words.length; i++) {
      if(arr[i].length > len){
        len = arr[i].length;
      }
  }
  return len;
}

function addSpaces(word,len){
  if(word.length == len){
    return "";
  }
  return " ".repeat(len-word.length);
}

function stars () {
  let len = longestWordLength(words);
  console.log("*".repeat(len+4));
  for(x in words){
    console.log('* ' + words[x] + addSpaces(words[x],len) + ' *');
  }
  console.log("*".repeat(len+4));
}
stars();