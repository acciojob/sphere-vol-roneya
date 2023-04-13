
var myInput = document.getElementById("volume");
var r = document.getElementById("radius");

function volume_sphere() {

event.preventDefault();
myInput.value = Math.PI*(4/3)*r.value*r.value*r.value;

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
