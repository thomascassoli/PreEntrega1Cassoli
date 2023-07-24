let usuario = "";
let nombreUsuario = prompt("Ingrese su nombre y apellido");
 
alert("Bienvenido/a " + nombreUsuario); 

let edad = prompt("Solo podes solicitar ingresar si es mayor de edad. Por favor ingrese su edad:");
if (edad >= 18){
    alert("Sos mayor de edad. Podes solicitar lista de vehiculos.");
}else {
        alert("Sos menor de edad. No podes solicitar la lista.");
    }

console.log("Tengo estos vehiculos a la venta, a continuacion te muestro caules son..");

const vehiculos = [
   { auto: "volkswagen gol trend", precio: 3000000},
   { auto: "chevrolet vectra", precio: 2100000},
   { auto: "ford fiesta", precio: 200000},
   { auto: "fiat uno", precio: 900000}
]

vehiculos.forEach(auto => {
    console.log (auto.auto);
    
});

prompt("Te interesa saber mas sobre los vehiculos?");

function Autos(marca, color, precio){

    this.marca = marca;
    this.color = color;
    this.precio = precio;
}

const Autos1 = new Autos ("Volkswagen gol trend", "negro", "3.000.000");
const Autos2 = new Autos("Chevrolet vectra", "gris", "2.100.000");
const Autos3 = new Autos("Ford fiesta", "rojo", "2.00.000");
const Autos4 = new Autos("Fiat uno", "blanco", "900.000");

console.log(Autos1);
console.log(Autos2);
console.log(Autos3);
console.log(Autos4);

prompt("Poner si para saber cual es el auto mas barato al mas caro");

const autos = [' Volkswagen' , ' Chevrolet' , ' Ford' , ' Fiat' ];
autos.reverse();
alert(autos);


let autoAcomprar = prompt("indique el auto a que quiera comprar..");
console.log(vehiculos.find((Auto)=> Auto.auto === autoAcomprar))


let finalizacion = alert("Gracias. Cualquier consulta, estamos a su dispocision.");
