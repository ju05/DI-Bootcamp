//outra tentativa
function beerSongWJ() {
    let startNum = Number(prompt("Enter a number:"))
    let word = "bottles"
    let takeDown = 1

    let i = startNum
    while (i > 0){ 
        if (i === 1){
            word = " bottle";
        } 
        else { word = " bottles"} 
    
    
        console.log(i + word + " of beer on the wall.")    
        console.log("Take "+ takeDown + " down, pass it around.")
        i = i-takeDown
        if (takeDown < i){
            takeDown ++
        }
        else {
            takeDown = i
        }
    }
    
       
 }

console.log(beerSongWJ())


    
