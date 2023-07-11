// alert("Hello!");
// console.log("Liliana");

// ------------declaración de variables --------------
// const PRECIO= 200;
// const TEXTO_PAGAR= "Total a Pagar: $";
// const BOTON_RESUMEN= document.getElementById("resumen");

// estudiante = 0.20;
// trainee= 0.50;
// junior= 0.95;

// const categoria={
// estudiante : 0.20,
// trainee : 0.50,
// junior: 0.95,

// }
// var totalf= (cantidad * precio);
// console.log((totalf))



// function pagarTotal(indice)
// {
//   categoria[categoriaElegida].classList.remove("elegida")
//   categoria[indice].classList.add("elegida")
//   categoriaElegida = indice

// }

// class Compra{
//     constructor(nombre, apellido, categoria, cantidad){
//         this.nombre=nombre;
//         this.apellido=apellido;
//         this.categoria=categoria;
//         this.cantidad=cantidad;
//     }
// }

// class UI{
//     addCompra(){


//     if(element.name ='estudiante'){
//     alert(nombre +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
//     'Total a pagar' + '$ ' + ((cantidad*200) * estudiante));
// }
//     }
//     else (name ='junior'){
//         alert(nombre +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
//         'Total a pagar' + '$ ' + ((cantidad*200) * junior));
//     }
//     else(name ='traine'){
//         alert(nombre +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
//         'Total a pagar' + '$ ' + ((cantidad*200) * trainee));
//     }
      

// }



// eventos DOM
// document.getElementById('formulario').addEventListener('submit', function(e){
//     const nombre= document.getElementById('nombre'). value;
//     const apellido= document.getElementById('apellido'). value;
//     const categoria= document.getElementById('categoria'). value;
//     const cantidad= document.getElementById('cantidad'). value;

//     // console.log(nombre, apellido, categoria, cantidad, (cantidad*200 * estudiante));
//     // const compra= new Compra(nombre, apellido, categoria, cantidad,);
//    e.preventDefault();

//    alert(nombre + ' ' +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
//    'Total a pagar ' + ' $' + ((cantidad*200) * estudiante));
//    document.getElementById("formulario").reset('btn-borrar');

//    alert(nombre + ' ' +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
//    'Total a pagar ' + ' $' + ((cantidad*200) * trainee));
//    document.getElementById("formulario").reset('btn-borrar');

//    alert(nombre + ' ' +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
//    'Total a pagar ' + ' $' + ((cantidad*200) * junior));
//    document.getElementById("formulario").reset('btn-borrar');
 

  
// });

// document.getElementById("formulario").reset('btn-borrar');

const PRECIO=200;
const TEXTO_PAGAR="Total a Pagar: $";
const BOTON_RESUMEN=document.getElementById("resumen");
const BOTON_BORRAR=document.getElementById("borrar");
const INP_NAME=document.getElementById("nombre");
const INP_SURNAME=document.getElementById("apellido");
const INP_EMAIL=document.getElementById("correo");
const INP_NUM=document.getElementById("cantidad");
var RESULTADO=document.getElementById("pagar");
var calculo=0;
var cantidad=0;


// estudiante = 0.20;
// trainee= 0.50;
// junior= 0.95;


BOTON_RESUMEN.addEventListener("click",() => {
    if(document.getElementById("cantidad").value==""){
        alert("El valor cantidad no puede estar vacio");
        return;
    }else{
        cantidad=parseInt(document.getElementById("cantidad").value);
    }
    if(document.getElementById("categoria").value=="value0"){
        calculo= PRECIO*80/100;
        calculo=(PRECIO-calculo)*cantidad;
        RESULTADO.value=`${TEXTO_PAGAR}${calculo}`;   
    };
    if(document.getElementById("categoria").value=="value1"){      
        calculo= PRECIO*50/100;
        calculo=(PRECIO-calculo)*cantidad;
        RESULTADO.value=`${TEXTO_PAGAR}${calculo}`;
    };
    if(document.getElementById("categoria").value=="value2"){
        calculo= PRECIO*15/100;
        calculo=(PRECIO-calculo)*cantidad;
        RESULTADO.value=`${TEXTO_PAGAR}${calculo}`;
    };
});

BOTON_BORRAR.addEventListener("click",()=>{
    INP_NAME.value="";
    INP_SURNAME.value="";
    INP_EMAIL.value="";
    INP_NUM.value="";

})

// BOTON_RESUMEN.addEventListener("click",function(){
//     console.log("Hola sin función arrow!");
    
// });

// function Liliana(){
//     console.log("Hola desde la función!");

// }