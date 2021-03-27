var d = new Date();
var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

var months = ["Enero", "Febrero", "Marzo", "Abil", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


var daysnames = days[d.getDay()];
var monthsnames = months[d.getMonth()];

document.getElementById("currentdate").innerHTML = daysnames + ", " + d.getDate() + " " + monthsnames + " " + d.getFullYear();