console.log("before the setTimeout")
let _timeout = setTimeout(function(){
    console.log("After 5 seconds")
}, 5000)
console.log("after the setTimeout")

let _Interval = setInterval(function(){
    console.log("intervalo 2 seg")
}, 2000)

clearTimeout(_timeout)
clearInterval(_Interval)




function start(){
    console.log("HI")
    let box = document.getElementById('inner');
    let position = 0;
    let id = setInterval(function(){
      if(position == 350){
        clearInterval(id)
      }
      else{
        position++
        box.style.left = position + "px";
        
      }
  
    },1)
  }
