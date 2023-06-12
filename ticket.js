// alert("Hello!")

// ------------declaración de variables --------------
const precio= 200;
const categoria =["0.80" ,"0.50","0.15" ]


var totalf= (cantidad * precio);
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

class UI{
    addCompra(){

    }

}


// eventos DOM
document.getElementById('formulario').addEventListener('submit', function(e){
    const nombre= document.getElementById('nombre'). value;
    const apellido= document.getElementById('apellido'). value;
    const categoria= document.getElementById('categoria'). value;
    const cantidad= document.getElementById('cantidad'). value;

    console.log(nombre, apellido, categoria, cantidad, (cantidad*200 * 0.80));
    const compra= new Compra(nombre, apellido, categoria, cantidad,);
   e.preventDefault();

   alert(nombre +  apellido  + ' ha seleccionado ' + cantidad + ' entradas  a: ' +  '$' + ((cantidad*200) * 0.80 ));
});




