var char = document.getElementById("char");
var left = 5;
var top = 5;
var keyPressed = false;

document.addEventListener("keydown", function(event) {
  event.preventDefault();
  if(event.keyCode == 37){
    left = left - 1;
  }
  else if(event.keyCode == 38){
    top = top + 1;
  }
  else if(event.keyCode == 39){
    left = left + 1;
  }
  else{
    top = top + 1;
  }

  char.setAttribute("style", "top:" + top + "rem");
  char.setAttribute("style", "left:" + left + "rem");
});