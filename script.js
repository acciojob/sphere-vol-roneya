function volume_sphere() {
    //Write your code here
  // Get the input element
var myInput = document.getElementById("volume");
var r = document.getElementById("radius");
	
myInput.value = 3.14*(4/3)*r.value*r.value*r.value;

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
