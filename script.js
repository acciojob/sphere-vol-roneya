
var myInput = document.getElementById("volume");
var r = document.getElementById("radius");

function volume_sphere() {

event.preventDefault();
	let v = Math.PI*(4/3)*Math.pow(r.value, 3);
	v = v.toFixed(4);
	
myInput.value = Math.abs(v);

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
