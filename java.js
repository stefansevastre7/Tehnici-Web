function myFunction(){ 
	
   var d = new Date();
   var n = d.getDay();
    if (n == 1){
		document.getElementById("demo").innerHTML = "Grupa ce trebuie lucrata astazi este piept" ;}
    else if (n == 2){
	 document.getElementById("demo").innerHTML = "Grupa ce trebuie lucrata astazi este spatele" ;}
    else if (n == 3){
	   document.getElementById("demo").innerHTML = "Grupa ce trebuie lucrata astazi sunt picioarele" ;}
    else if (n == 4){
	   document.getElementById("demo").innerHTML = "Grupa ce trebuie lucrata astazi sunt umerii" ;}
    else {
	   document.getElementById("demo").innerHTML = "Grupa ce trebuie lucrata astazi sunt bratele" ;}
	
}
document.getElementById("demo").style.color = "red";

var mesaj = "";
var i;
var antrenor = ["Pirvu Liviu", "Lazar Roxana", "Draghia Nicu"];
	for(i=0; i<antrenor.length; i++){
		mesaj = mesaj + antrenor[i] + '<br>';} 
		
document.getElementById("antr").innerHTML = mesaj;		
		

function myFunction2() {
  
  setInterval(function(){ alert("Multumim pentru abonare."); }, 2000);
}


function myFunction3(){
	 var checkBox1 = document.getElementById("myCheck1");
	 var checkBox2 = document.getElementById("myCheck2");
	 var checkBox3 = document.getElementById("myCheck3");
	 var checkBox4 = document.getElementById("myCheck4");
	 var x = document.getElementById("myText").value;
	 
	 if (checkBox1.checked == true && checkBox3.checked == true && x>=80){
		document.getElementById("rez").innerHTML = 3000 + " kcal";
	 }
	 else if (checkBox1.checked == true && checkBox4.checked == true && x<80){
		document.getElementById("rez").innerHTML = 3500 + " kcal";
	 }
	  if (checkBox2.checked == true && checkBox3.checked == true && x>=80){
		document.getElementById("rez").innerHTML = 2000 + " kcal";
	 }
	 else if (checkBox2.checked == true && checkBox4.checked == true && x<45){
		document.getElementById("rez").innerHTML = 2500 + " kcal";
	 }

}
function myFunction4() {
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[0]);
}

var txt = '{"name":"Stefan", "age":20, "city":"Galati" }'
var obj = JSON.parse(txt);
document.getElementById("proprietar").innerHTML = obj.name + ", " + obj.age + ", " + obj.city;


function myFunction5() {
  window.open("tarife.html");
}
