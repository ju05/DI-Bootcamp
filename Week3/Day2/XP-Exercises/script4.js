let _form = document.getElementById("MyForm");
let _radius = document.getElementById("radius");
let _volume = document.getElementById("volume");
let Volu
_form.addEventListener("submit", function (event){
    event.preventDefault()
   Volu =calculateVolume();
   
})


function calculateVolume(){
   _radius.value = Number(_radius.value)
   let Volume = 4 * Math.PI * (Math.pow(_radius.value , 3)) / 3;
   
   return Volume;  

}
// console.log(calculateVolume())
