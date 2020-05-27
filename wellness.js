function showCoords(event) {
  var x = event.pageX;
  var y = event.pageY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}	

function myFunction() {
  var str = document.getElementById("demo2").innerHTML; 
  var txt = str.replace("Sportul","Miscarea");
  document.getElementById("demo2").innerHTML = txt;
}

function myFunction2() {
  document.getElementById("demo3").classList.add("mystyle");
}