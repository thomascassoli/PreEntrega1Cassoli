let usuario = "";
localStorage.setItem("usuario", usuario);

let usuarioEnLocalStorage = localStorage.getItem("usuario");
console.log(usuarioEnLocalStorage);

let usuarioIngresado = prompt ("ingrese su nombre");
localStorage.setItem ("ingresado",usuarioIngresado);

let usuarioIngresadoEnLocalStorage = localStorage.getItem ("ingresado");
console.log(usuarioIngresadoEnLocalStorage);









const ventas = document.getElementById("ventas");


const autosVenta = [
{ id: 1,
    nombre:"Gol trend",
    anio: "Modelo 2016",
    precio: 3000000,
    img: 
    "https://i1.wp.com/www.mundoautomotor.com.ar/web/wp-content/uploads/2012/10/Volkswagen-Gol-Trend-2013-1.jpg?w=1400"

},
{
    id: 2,
        nombre: "Chevrolet vectra",
        anio: "Modelo 2014",
        precio: 2100000,
        img: 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chevrolet_Vectra_2.4_CD_2010_%2814439978435%29.jpg/1024px-Chevrolet_Vectra_2.4_CD_2010_%2814439978435%29.jpg"
    
    },
    
        { id: 3,
            nombre:"Ford fiesta",
            anio: "Modelo 2012",
            precio: 200000,
            img: 
            "https://st5.depositphotos.com/11618586/64369/i/450/depositphotos_643697388-stock-photo-side-turkey-february-09-2023.jpg"
        
    },

        { id: 4,
            nombre:"Fiat uno",
            anio: "Modelo 2009",
            precio: 900000,
            img: 
            "https://wallpapercave.com/wp/wp9487722.jpg"
        
        }
        

];

let carrito = [];

autosVenta.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src= "${product.img}">
    <h2> "${product.nombre}</h2>
    <h3> "${product.anio} </h3>
    <p> "${product.precio} $</p>
    `;
    ventas.append(content);

    let vendido = document.createElement("button")
    vendido.innerText = "reservar";
    vendido.className = "comprar";
    
    content.append(vendido);

    vendido.addEventListener("click", () =>{
        carrito.push({
            id:product.id,
            img: product.img,
            nombre: product.nombre,
            ano: product.anio,
            precio: product.precio,


        });
        console.log(carrito);
    })


});











const alerta  = document.querySelector("#alerta");
alerta.addEventListener("click" , mostrarAlerta)
function mostrarAlerta(){
    alert("Whatsapp 1138562384");
}

console.log("Tengo estos vehiculos a la venta, a continuacion te muestro caules son..");

const consola = document.querySelector("#consola");
consola.addEventListener("click", () => {
    listado.innerHTML="<li class= 'listado-item'>" + "<a href= 'auto1'> AUTO 1 <a/> Volkswagen gol trend, negro, precio: 3.000.000 + </li>";
    listado.innerHTML+="<li class= 'listado-item'>" + "<a href= 'auto2'> AUTO 2 <a/> Chevrolet vectra, gris, precio: 2.100.000 + </li>";
    listado.innerHTML+="<li class= 'listado-item'>" + "<a href= 'auto3'> AUTO 3 <a/> Ford fiesta, rojo, precio: 2.00.000 + </li>";
    listado.innerHTML+="<li class= 'listado-item'>" + "<a href= 'auto4'> AUTO 4 <a/> Fiat uno, blanco, precio: 900.000 + </li>";
})



const imagenes = document.querySelector("#consola");
consola.addEventListener("click", () => {
    listado.innerHTML="<li class= 'listado-item'>" + "<a href= 'https://i1.wp.com/www.mundoautomotor.com.ar/web/wp-content/uploads/2012/10/Volkswagen-Gol-Trend-2013-1.jpg?w=1400'> AUTO 1 <a/> Volkswagen gol trend, blanco, precio: 3.000.000  </li>";
    listado.innerHTML+="<li class= 'listado-item'>" + "<a href= 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chevrolet_Vectra_2.4_CD_2010_%2814439978435%29.jpg/1024px-Chevrolet_Vectra_2.4_CD_2010_%2814439978435%29.jpg'> AUTO 2 <a/> Chevrolet vectra, gris, precio: 2.100.000  </li>";
    listado.innerHTML+="<li class= 'listado-item'>" + "<a href= 'https://st5.depositphotos.com/11618586/64369/i/450/depositphotos_643697388-stock-photo-side-turkey-february-09-2023.jpg'> AUTO 3 <a/> Ford fiesta, gris, precio: 2.00.000  </li>";
    listado.innerHTML+="<li class= 'listado-item'>" + "<a href= 'https://wallpapercave.com/wp/wp9487722.jpg'> AUTO 4 <a/> Fiat uno, blanco, precio: 900.000  </li>";
})




const auto = document.querySelector("#vehiculos");
const venta = document.querySelectorAll(".ventas");

const vehiculoss = ["Gol trend", "Chevrolet vectra", "Ford fiesta",  "Fiat uno"];

let listado = document.createElement("ul");
listado.classList.add("listado");
listado.innerHTML= "<li class= 'listado-item'>" + vehiculoss[0] + "</li>";
listado.innerHTML+= "<li class= 'listado-item'>" + vehiculoss[1] + "</li>";
listado.innerHTML+=  "<li class= 'listado-item'>" + vehiculoss[2] + "</li>";
listado.innerHTML+=  "<li class= 'listado-item'>" + vehiculoss[3] + "</li>";

auto.append(listado); 




