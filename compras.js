/*const contenedorDiv = document.createElement("div");//creamos un contenedor//
document.body.appendChild(contenedorDiv);//insertamos el div en el body de html//
contenedorDiv.id ="contenedor";//aqui se añade un atributo, en este caso id//

const parrafo = document.createElement("p");//creamos un parrafo//
parrafo.innerHTML = "comienza la funcion con js";//insertamos texto al parrafo//
/*document.body.appendChild(parrafo); insertamos el parrafo al body de html*/

//vamos a insertar el parrafo en el div, se puede insertar cualkquier elemento//
//contenedorDiv.appendChild(parrafo);decimos que parrafo es hijo de contenedor div//

//const section = document.getElementById("section");//
//const vegetales = ["Tomates","Cebollas","Brocolis", "Ajo", "aji"];//
//const carniceria = document.getElementById("container1");//
//const carnes = ["Asado","Nalga","Peseto", "Picada", "Vacio"];//
//const hogar = document.getElementById("container2");//
//const lenceria = ["Vasos","Platos","Sabanas", "Copas", "Cepillos"];//
const btnincorporarProducto = document.querySelector(".boton");
let selectorVegetales = document.getElementById("selector-vegetales");
let selectorCarnes = document.getElementById("selector-carnes");
let selectorHogar = document.getElementById("selector-hogar");
let btnVegetales = document.getElementById("btn-vegetales");
let btnCarniceria = document.getElementById("btn-carniceria");
let btnHogar = document.getElementById("btn-hogar");
const listaVegetales = document.getElementById("lista-vegetales");
const listaCarnes = document.getElementById("lista-de-carnes");
const listaHogar = document.querySelector("lista-hogar");




let listaCompras = [];
let seleccionar ;
let vegetalSeleccionado;
let carneSeleccionada;
let hogarSeleccionado;

//section.innerHTML = "";//


selectorVegetales.addEventListener('change', function () {
        vegetalSeleccionado = (this.value);
        });
selectorCarnes.addEventListener('change', function () {
       carneSeleccionada = (this.value);
                       });
                
selectorHogar.addEventListener('change', function () {
       hogarSeleccionado = (this.value);
                       });

escuchar();

function seleccionVegetales(){
        if(listaVegetales.children.length > 0)
        {
                for(let i=0; i < listaVegetales.children.length ; i++) //por cada vegetal que el usuario haya seleccionado
                {               
                        
                  
                        if(listaVegetales.children[i].children[1].innerHTML == vegetalSeleccionado) //entre los hijos del titulo de vegetales, revisar si su hijo numero 1 (es decir, Nombre del item), es igual al que escogio el usuario. Si lo es, sumar uno a la cantidad existente. Si no existe, crear uno nuevo
                        {                        
                                if(listaVegetales.children[i].children.length <3) continue; //confirmando que existe el elemento 3ro del array 
                                let cantidadDelItem = parseInt(listaVegetales.children[i].children[2].innerHTML); //obtiene el int del children numero 2
                                cantidadDelItem++;  //esto suma 1 al segundo children que en este caso debe ser
                                listaVegetales.children[i].children[2].innerHTML = cantidadDelItem; //reasignamos el numero que se incremento para que se vea
                                return; // este return previene la ejecucion de la linea con generarvegetal();
                        }
                } 
        }     
        
        generarVegetal();
       
}

function generarVegetal(){
        if(!selectorVegetales == 0){
                let padre = document.createElement("div");
                padre.id = vegetalSeleccionado+"ID";
                listaVegetales.appendChild(padre);
                padre.classList.add("item");
        
                let prefijo = document.createElement("div");
                prefijo.id = "cajaCheck";
                prefijo.innerHTML =` <input type = "checkbox" >`;
                
                let nombreDelItem = document.createElement("div");
                nombreDelItem.id = vegetalSeleccionado;
                nombreDelItem.innerHTML = `${vegetalSeleccionado}`;
        
                let cantidadDelItem = document.createElement("div"); //creamos un div nuevo para la cantidad
                cantidadDelItem.id = "cantidadDe"+vegetalSeleccionado; //cantidadDe vegetal seleccionado como ID
                cantidadDelItem.innerHTML = `1`; //1 item porque es el primero
               
                let btnEliminarProducto = document.createElement("button");
                btnEliminarProducto.id = "desincorporar";
                btnEliminarProducto.innerHTML = `-`;
                
                padre.appendChild(prefijo);
                padre.appendChild(nombreDelItem);      
                padre.appendChild(cantidadDelItem); //nos aseguramos que el div sea el hijo numero 2 
                padre.appendChild(btnEliminarProducto);                       
                
                btnEliminarProducto.addEventListener("click",  function () {
                        desincorporarVegetales(vegetalSeleccionado);
                });       
               
}

}
function desincorporarVegetales(){
        if(listaVegetales.children.length > 0)
        {
                for(let i=0; i < listaVegetales.children.length ; i++) //por cada vegetal que el usuario haya seleccionado
                {               
                        
                  
                        if(listaVegetales.children[i].children[1].innerHTML == vegetalSeleccionado) //entre los hijos del titulo de vegetales, revisar si su hijo numero 1 (es decir, Nombre del item), es igual al que escogio el usuario. Si lo es, sumar uno a la cantidad existente. Si no existe, crear uno nuevo
                        
                        {                        
                                if(listaVegetales.children[i].children.length <3) continue; //confirmando que existe el elemento 3ro del array 
                                let cantidadDelItem = parseInt(listaVegetales.children[i].children[2].innerHTML);// obtiene el int del children numero 2//
                                cantidadDelItem --;  //esto suma 1 al segundo children que en este caso debe ser
                               listaVegetales.children[i].children[2].innerHTML = cantidadDelItem;// reasignamos el numero que se incremento para que se vea//
                                return; // este return previene la ejecucion de la linea con generarvegetal();
                        }
                } 
        }     
               
        }
        console.log(desincorporarVegetales);


function seleccionCarnes(){
        if(!selectorCarnes == 0){
        let padre = document.createElement("div");
        tituloCarnes.appendChild(padre);
        padre.classList.add("item"); 

        let prefijo = document.createElement("div");
        prefijo.id = "cajaCheck";
        tituloCarnes.appendChild(prefijo);
        prefijo.innerHTML =` <input type = "checkbox" >` ; 

        
        let nombreDelItem = document.createElement("div");
        nombreDelItem.id = "listaProducto";
        tituloCarnes.appendChild(nombreDelItem);
        nombreDelItem.innerHTML = `${carneSeleccionada}`; 

        let btnEliminarProducto = document.createElement("button");
        btnEliminarProducto.id = "desincorporar";
        tituloCarnes.appendChild(btnEliminarProducto);
        btnEliminarProducto.innerHTML = `-` ;  

        
        padre.appendChild(prefijo);
        padre.appendChild(nombreDelItem);               
        padre.appendChild(btnEliminarProducto);

        function btnClickCarnes(e){
                console.log("hola Mi reina");
        }
        
        btnEliminarProducto.addEventListener("click", btnClickCarnes);
        console.log(btnEliminarProducto);
}

}


function seleccionHogar(){
        if(!selectorHogar == 0){
        let padre = document.createElement("div");
        tituloHogar.appendChild(padre);
        padre.classList.add("item"); 

        let prefijo = document.createElement("div");
        prefijo.id = "cajaCheck";
        tituloHogar.appendChild(prefijo);
        prefijo.innerHTML =` <input type = "checkbox" >` ; 

        
        let nombreDelItem = document.createElement("div");
        nombreDelItem.id = "listaProducto";
        tituloHogar.appendChild(nombreDelItem);
        nombreDelItem.innerHTML = `${hogarSeleccionado}`; 

        let btnEliminarProducto = document.createElement("button");
        btnEliminarProducto.id = "desincorporar";
        tituloHogar.appendChild(btnEliminarProducto);
        btnEliminarProducto.innerHTML = `-` ;  

        
        padre.appendChild(prefijo);
        padre.appendChild(nombreDelItem);
        padre.appendChild(btnEliminarProducto);
        
        function btnClickHogar(e){
                console.log("hola Mi reina");
        }
        
        btnEliminarProducto.addEventListener("click", btnClickHogar);
        console.log(btnEliminarProducto);
}

}

   




function escuchar(){
        btnVegetales.addEventListener("click", seleccionVegetales);
        btnCarniceria.addEventListener("click", seleccionCarnes);
        btnHogar.addEventListener("click", seleccionHogar);

}

   





        
                            
            
        

            