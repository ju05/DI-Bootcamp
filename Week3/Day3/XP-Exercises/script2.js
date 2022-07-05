function myMove(){
    let box = document.getElementById('animate');
    let position = 0;
    let id = setInterval(function(){
      if(position == 350){
        clearInterval(id)
      }
      else{
        position++
        box.style.left = position + "px";
        // box.style.top = position + "px";
      }
  
    },1)
  }