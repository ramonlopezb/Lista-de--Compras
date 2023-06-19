const btnincorporarProducto = document.querySelector(".boton");
let selectorVegetales = document.getElementById("selector-vegetales");
let selectorCarnes = document.getElementById("selector-carnes");
let selectorHogar = document.getElementById("selector-hogar");
let btnVegetales = document.getElementById("btn-vegetales");
let btnCarniceria = document.getElementById("btn-carniceria");
let btnHogar = document.getElementById("btn-hogar");
const listaVegetales = document.getElementById("lista-vegetales");
const listaCarnes = document.getElementById("lista-de-carnes");
const listaHogar = document.getElementById("lista-hogar");

let vegetalSeleccionado;
let carneSeleccionada;
let hogarSeleccionado;


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
                        
                  
                        if(listaVegetales.children[i].children[1].innerHTML == vegetalSeleccionado) /*entre los hijos del titulo de vegetales, revisar si su hijo numero 1 (es decir, Nombre del item), es igual al que escogio el usuario. Si lo es, sumar uno a la cantidad existente. Si no existe, crear uno nuevo*/
                        {                        
                                if(listaVegetales.children[i].children.length <3) continue; //confirmando que existe el elemento 3ro del array //
                                let cantidadDelItem = parseInt(listaVegetales.children[i].children[2].innerHTML); //obtiene el int del children numero 2//
                                cantidadDelItem ++;  //esto suma 1 al segundo children que en este caso debe ser//
                                listaVegetales.children[i].children[2].innerHTML = cantidadDelItem; //reasignamos el numero que se incremento para que se vea//
                                return; // este return previene la ejecucion de la linea con generarvegetal();//
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
        
                let cantidadDelItem = document.createElement("div"); //creamos un div nuevo para la cantidad//
                cantidadDelItem.id = "cantidadDe"+vegetalSeleccionado; //cantidadDe vegetal seleccionado como ID//
                cantidadDelItem.innerHTML = `1`; //1 item porque es el primero, tiene posicion 1 en el array//
               
                let btnEliminarProducto = document.createElement("button");
                btnEliminarProducto.id = "desincorporar";
                btnEliminarProducto.innerHTML = `-`;
                
                padre.appendChild(prefijo);
                padre.appendChild(nombreDelItem);      
                padre.appendChild(cantidadDelItem); //nos aseguramos que el div sea el hijo numero 2 //
                padre.appendChild(btnEliminarProducto);                       
                
                btnEliminarProducto.addEventListener("click",  function () {
                        desincorporarVegetales(vegetalSeleccionado);
                });                    
              
}
}

function desincorporarVegetales(){
        if(listaVegetales.children.length > 0)
        {
                for(let i=0; i < listaVegetales.children.length; i++) 
                {               
                        
                  
                        if(listaVegetales.children[i].children[1].innerHTML == vegetalSeleccionado) 
                        
                        {                        
                                if(listaVegetales.children[i].children.length <3) continue; 
                                let cantidadDelItem = parseInt(listaVegetales.children[i].children[2].innerHTML);
                                cantidadDelItem --;
                                listaVegetales.children[i].children[2].innerHTML= cantidadDelItem;
                                if(cantidadDelItem <= 0){
                                                                               
                                        listaVegetales.removeChild(listaVegetales.children[i])
                                }
                                
                                                              
                        }                        
                }                                                                                   
                          
                        }                
                                 
        }
            
      
       function seleccionCarnes(){
        if(listaCarnes.children.length > 0)
        {
                for(let i=0; i < listaCarnes.children.length; i++) 
                {               
                        
                  
                        if(listaCarnes.children[i].children[1].innerHTML == carneSeleccionada) 
                        {                        
                                if(listaCarnes.children[i].children.length <3) continue;
                                let cantidadDelItem = parseInt(listaCarnes.children[i].children[2].innerHTML); 
                                cantidadDelItem ++;  
                                listaCarnes.children[i].children[2].innerHTML = cantidadDelItem;  
                                return; 
                        }
                } 
        }     
        
        generarCarnes();
        console.log(seleccionCarnes);
       
}

function generarCarnes(){
        if(!selectorCarnes == 0){
        let padre = document.createElement("div");
        padre.id = carneSeleccionada +"ID";
        listaCarnes.appendChild(padre);
        padre.classList.add("item"); 

        let prefijo = document.createElement("div");
        prefijo.id = "cajaCheck";
        prefijo.innerHTML =` <input type = "checkbox" >` ; 

        
        let nombreDelItem = document.createElement("div");
        nombreDelItem.id = carneSeleccionada;
        nombreDelItem.innerHTML = `${carneSeleccionada}`; 

        let cantidadDelItem = document.createElement("div");
        cantidadDelItem.id = "cantidadDe"+ carneSeleccionada; 
        cantidadDelItem.innerHTML = `1`;

        let btnEliminarProducto = document.createElement("button");
        btnEliminarProducto.id = "desincorporar";
        btnEliminarProducto.innerHTML = `-` ;  

        
        padre.appendChild(prefijo);
        padre.appendChild(nombreDelItem);
        padre.appendChild(cantidadDelItem);               
        padre.appendChild(btnEliminarProducto);

        
        
        btnEliminarProducto.addEventListener("click", function () {
                desincorporarCarnes(carneSeleccionada);
        })        
        
}
}
function desincorporarCarnes(){
        if(listaCarnes.children.length > 0)
        {

        for(let i = 0; i < listaCarnes.children.length; i++)
        {
                if(listaCarnes.children[i].children[1].innerHTML == carneSeleccionada)
                {
                        if(listaCarnes.children[i].children.length < 3) continue; 
                        let cantidadDelItem = parseInt(listaCarnes.children[i].children[2].innerHTML); 
                        cantidadDelItem --;
                        listaCarnes.children[i].children[2].innerHTML = cantidadDelItem;
                        if(cantidadDelItem <= 0){
                                                                               
                                listaCarnes.removeChild(listaCarnes.children[i]);
                        }
                                                      
                }
        }
}
}


function seleccionHogar(){
        if(listaHogar.children.length > 0)
        {
                for(let i=0; i < listaHogar.children.length ; i++) 
                {               
                        
                  
                        if(listaHogar.children[i].children[1].innerHTML == hogarSeleccionado) 
                        {                        
                                if(listaHogar.children[i].children.length <3) continue; 
                                let cantidadDelItem = parseInt(listaHogar.children[i].children[2].innerHTML); 
                                cantidadDelItem ++;  
                                listaHogar.children[i].children[2].innerHTML = cantidadDelItem; 
                                return; 
                        }
                } 
        }
        
        generarHogar();
}  
       
      

function generarHogar(){
        if(!selectorHogar == 0){
        let padre = document.createElement("div");
        padre.id = hogarSeleccionado+"ID";
        listaHogar.appendChild(padre);
        padre.classList.add("item"); 

        let prefijo = document.createElement("div");
        prefijo.id = "cajaCheck";
        prefijo.innerHTML =` <input type = "checkbox" >` ; 

        
        let nombreDelItem = document.createElement("div");
        nombreDelItem.id = hogarSeleccionado;
        nombreDelItem.innerHTML = `${hogarSeleccionado}`; 

        let cantidadDelItem = document.createElement("div"); 
        cantidadDelItem.id = "cantidadDe"+hogarSeleccionado; 
        cantidadDelItem.innerHTML = `1`; 
               

        let btnEliminarProducto = document.createElement("button");
        btnEliminarProducto.id = "desincorporar";
        btnEliminarProducto.innerHTML = `-` ; 
 

        
        padre.appendChild(prefijo);
        padre.appendChild(nombreDelItem);
        padre.appendChild(cantidadDelItem);
        padre.appendChild(btnEliminarProducto); 
             
       
        btnEliminarProducto.addEventListener("click",  function () {
                desincorporarHogar(hogarSeleccionado);
        });       

}
}
function desincorporarHogar(){
        if(listaHogar.children.length > 0)
        {
                for(let i=0; i < listaHogar.children.length; i++)
                {               
                        
                  
                        if(listaHogar.children[i].children[1].innerHTML == hogarSeleccionado);
                        
                        {                        
                                if(listaHogar.children[i].children.length <3) continue; 
                                let cantidadDelItem = parseInt(listaHogar.children[i].children[2].innerHTML);
                                cantidadDelItem --;  
                                listaHogar.children[i].children[2].innerHTML = cantidadDelItem;
                                if(cantidadDelItem <= 0){
                                                                               
                                        listaHogar.removeChild(listaHogar.children[i])
                                }
                                                              
                                
                        }
                } 
        } 
}    
              
        
function escuchar(){
        btnVegetales.addEventListener("click", seleccionVegetales);
        btnCarniceria.addEventListener("click", seleccionCarnes);
        btnHogar.addEventListener("click", seleccionHogar);

}

   





        
                            
            
        

            