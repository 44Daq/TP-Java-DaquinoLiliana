// alert("Hello!")

// ------------declaración de variables --------------
const precio= 200;
const categoria=['estudiante', 'trainee' ,'junior' ]
estudiante = 0.20;
trainee= 0.50;
junior= 0.95;

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

class Compra{
    constructor(nombre, apellido, categoria, cantidad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.categoria=categoria;
        this.cantidad=cantidad;
    }
}

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
document.getElementById('formulario').addEventListener('submit', function(e){
    const nombre= document.getElementById('nombre'). value;
    const apellido= document.getElementById('apellido'). value;
    const categoria= document.getElementById('categoria'). value;
    const cantidad= document.getElementById('cantidad'). value;

    // console.log(nombre, apellido, categoria, cantidad, (cantidad*200 * estudiante));
    // const compra= new Compra(nombre, apellido, categoria, cantidad,);
   e.preventDefault();

   alert(nombre + ' ' +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
   'Total a pagar ' + ' $' + ((cantidad*200) * estudiante));
   document.getElementById("formulario").reset('btn-borrar');

   alert(nombre + ' ' +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
   'Total a pagar ' + ' $' + ((cantidad*200) * trainee));
   document.getElementById("formulario").reset('btn-borrar');

   alert(nombre + ' ' +  apellido  + ' has seleccionado ' + cantidad + ' entradas  a: ' +  '$200 - ' +  
   'Total a pagar ' + ' $' + ((cantidad*200) * junior));
   document.getElementById("formulario").reset('btn-borrar');
 

  
});

// document.getElementById("formulario").reset('btn-borrar');

