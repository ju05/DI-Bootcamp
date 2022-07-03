function beerSong() {
    //declaring the variables for storage the input of the user, the plural or sing for "bottle"
    //and the couting for takedown bottles
    let startNum = Number(prompt("Enter a number:"))
    let word = "bottles"
    let it = "it"
    let takeDown = 1
// the actual code to write the song (while the number of bottles is bigger than 0, keep console.loging)
    let i = startNum
    while (i > 0){ 
        //inside of the while the if condition to sing or plural for word "bottles" and "them"
        if (i === 1) {
            word = " bottle";
           
        } 
        else if (takeDown === 1){
            it = "it"
        }
        else {
            word == " bottles"
            it = "them"
    }  

        //the actual song lyrics
        console.log(i + word + " of beer on the wall.")    
        console.log("Take "+ takeDown + " down, pass " +it + " around.")
        // doing the substraction of how many bottles were take down: 
        i = i-takeDown
        //an if condition so in the end we take down all the resting bottles if the takeDown 
        //is bigger than the actual number of bottles on the wall
        if (takeDown < i){
            takeDown ++
        }
        else {
            takeDown = i
            console.log("0 bottles on the wall")
        }
    }   
       
 }
console.log(beerSong())


    
