
var myInput = document.getElementById("volume");
var r = document.getElementById("radius");

function volume_sphere() {

event.preventDefault();
myInput.value = Math.PI*(4/3)*Math.pow(r.value, 3);

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
