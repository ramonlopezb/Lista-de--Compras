/*const contenedorDiv = document.createElement("div");//creamos un contenedor//
document.body.appendChild(contenedorDiv);//insertamos el div en el body de html//
contenedorDiv.id ="contenedor";//aqui se añade un atributo, en este caso id//

const parrafo = document.createElement("p");//creamos un parrafo//
parrafo.innerHTML = "comienza la funcion con js";//insertamos texto al parrafo//
/*document.body.appendChild(parrafo); insertamos el parrafo al body de html*/

//vamos a insertar el parrafo en el div, se puede insertar cualkquier elemento//
//contenedorDiv.appendChild(parrafo);decimos que parrafo es hijo de contenedor div//
const legumbres = document.getElementById("container");
const vegetales = ["Tomates","Cebollas","Brocolis", "Ajo", "aji"];
   


legumbres.innerHTML = "";
function seleccionarVegetales(){
        for(i = 0, i < vegetales.length; i++;){
                const element = vegetales[i];
                let div = document.createElement("div");
                legumbres.appendChild(div);
                div.innerHTML = vegetales[i] ;  
                }
                
        };         
               

seleccionarVegetales();
