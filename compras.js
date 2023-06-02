/*const contenedorDiv = document.createElement("div");//creamos un contenedor//
document.body.appendChild(contenedorDiv);//insertamos el div en el body de html//
contenedorDiv.id ="contenedor";//aqui se añade un atributo, en este caso id//

const parrafo = document.createElement("p");//creamos un parrafo//
parrafo.innerHTML = "comienza la funcion con js";//insertamos texto al parrafo//
/*document.body.appendChild(parrafo); insertamos el parrafo al body de html*/

//vamos a insertar el parrafo en el div, se puede insertar cualkquier elemento//
//contenedorDiv.appendChild(parrafo);decimos que parrafo es hijo de contenedor div//
const section = document.getElementById("section");
const vegetales = ["Tomates","Cebollas","Brocolis", "Ajo", "aji"];
const carniceria = document.getElementById("container1");
const carnes = ["Asado","Nalga","Peseto", "Picada", "Vacio"];
const hogar = document.getElementById("container2");
const lenceria = ["Vasos","Platos","Sabanas", "Copas", "Cepillos"];
const btnincorporarProducto = document.querySelector(".boton");
let selectorVegetales = document.getElementById("selector-vegetales");
let selectorCarnes = document.getElementById("selector-carnes");
let selectorHogar = document.getElementById("selector-hogar");
let btnVegetales = document.getElementById("btn-vegetales");
let btnCarniceria = document.getElementById("btn-carniceria");
let btnHogar = document.getElementById("btn-hogar");

let listaCompras = [];
let seleccionar ;
let vegetalSeleccionado;
let carneSeleccionada;
let hogarSeleccionado;

section.innerHTML = "";

selectorVegetales.addEventListener('change', function () {
        vegetalSeleccionado = (this.value);
        });
selectorCarnes.addEventListener('change', function () {
       carneSeleccionada = (this.value);
                });
selectorHogar.addEventListener('change', function () {
       hogarSeleccionado = (this.value);
                       });


function seleccionVegetales(){
        if(!selectorVegetales == 0){

        let padre = document.createElement("div");
        section.appendChild(padre);
        padre.classList.add("item"); 

        let prefijo = document.createElement("div");
        prefijo.id = "cajaCheck";
        section.appendChild(prefijo);
        prefijo.innerHTML =` <input type = "checkbox" >` ; 

        
        let nombreDelItem = document.createElement("div");
        nombreDelItem.id = "listaProducto";
        section.appendChild(nombreDelItem);
        nombreDelItem.innerHTML = `${vegetalSeleccionado}`; 

        let sufijo = document.createElement("div");
        sufijo.id = "desincorporar";
        section.appendChild(sufijo);
        sufijo.innerHTML = `-` ;  

        
        padre.appendChild(prefijo);
        padre.appendChild(nombreDelItem);

        padre.appendChild(sufijo);}

}


btnVegetales.addEventListener("click", seleccionVegetales);


function seleccionCarnes(){
        if(!selectorCarnes == 0){

        let padre = document.createElement("div");
        section.appendChild(padre);
        padre.classList.add("item"); 

        let prefijo = document.createElement("div");
        prefijo.id = "cajaCheck";
        section.appendChild(prefijo);
        prefijo.innerHTML =` <input type = "checkbox" >` ; 

        
        let nombreDelItem = document.createElement("div");
        nombreDelItem.id = "listaProducto";
        section.appendChild(nombreDelItem);
        nombreDelItem.innerHTML = `${carneSeleccionada}`; 

        let sufijo = document.createElement("div");
        sufijo.id = "desincorporar";
        section.appendChild(sufijo);
        sufijo.innerHTML = `-` ;  

        
        padre.appendChild(prefijo);
        padre.appendChild(nombreDelItem);

        padre.appendChild(sufijo);}

}


btnCarniceria.addEventListener("click", seleccionCarnes);

function seleccionHogar(){
        if(!selectorHogar == 0){

        let padre = document.createElement("div");
        section.appendChild(padre);
        padre.classList.add("item"); 

        let prefijo = document.createElement("div");
        prefijo.id = "cajaCheck";
        section.appendChild(prefijo);
        prefijo.innerHTML =` <input type = "checkbox" >` ; 

        
        let nombreDelItem = document.createElement("div");
        nombreDelItem.id = "listaProducto";
        section.appendChild(nombreDelItem);
        nombreDelItem.innerHTML = `${hogarSeleccionado}`; 

        let sufijo = document.createElement("div");
        sufijo.id = "desincorporar";
        section.appendChild(sufijo);
        sufijo.innerHTML = `-` ;  

        
        padre.appendChild(prefijo);
        padre.appendChild(nombreDelItem);

        padre.appendChild(sufijo);}

}


btnHogar.addEventListener("click", seleccionHogar);

   





        
                            
            
        

            