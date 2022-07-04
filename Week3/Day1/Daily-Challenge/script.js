// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
let solarSystem =  [
    {name:'Mercury', moons: 0, color:'orange', radius:2439},
    {name:'Venus', moons: 0, color:'grey', radius:6051},
    {name:'Earth', moons:1, color:'blue', radius:6378},
    {name:'Mars', moons: 2, color:'red', radius:3396},
    {name:'Jupiter', moons: 79, color:'brown', radius:71492},
    {name:'Saturn', moons: 82, color:'yellow', radius:60268},
    {name:'Uranus', moons: 27, color:'ligthblue', radius:25559},
    {name:'Neptune', moons: 14, color:'darkblue', radius:24764}]

let root = document.getElementsByClassName("listPlanets")[0]
for (let i = 0; i < solarSystem.length; i++) {    
    let planet = document.createElement("div");
    planet.innerText = solarSystem[i].name;
    planet.classList.add("planet");
    planet.style.backgroundColor = solarSystem[i].color;
    root.appendChild(planet)       
}


