let usuario = "";
let nombreUsuario = prompt("Ingrese su nombre de usuario");
 
alert("Bienvenido/a " + nombreUsuario); 

let edad = prompt("Solo podes solicitar un turno si sos mayor de edad. Por favor ingrese su edad:");
if (edad >= 18){
    alert("Sos mayor de edad. Podes solicitar tu turno.");
}else {
        alert("Sos menor de edad. No podes solicitar tu turno.");
    }

let dia1 = "lunes";
let dia2 = "martes";

let diaDevacunacion = prompt("Dias disponibles para turno de vacunacion, Lunes y Martes. Por favor escriba el dia que pueda asistir y le brindaremos el horario.");

if (diaDevacunacion == "lunes"){
    alert ("Su turno es el dia " + diaDevacunacion  + " a las 18:15 pm");
}else if (diaDevacunacion == "martes"){
    alert ("Su turno es el dia " + diaDevacunacion  + " a las 10:20 am");
}else{
    alert("Dia seleccionado incorrecto");
}


let finalizacion = alert("Gracias por solicitar su turno.");
