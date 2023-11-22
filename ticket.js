// alert("Hello!");

// console.log("Liliana");
document.getElementById("btn-up").addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll= document.documentElement.scrollTop;
    // || document.body.scrollTop
    if(currentScroll > 0){
        // window.requestAnimationFrame(scrollUp);
        window.scrollTo(0,0);
        btnUp.style.transform ="scale(0)";
    }
}
btnUp= document.getElementById("btn-up");
window.onscroll= function(){
    var scroll= document.documentElement.scrollTop;
    if(scroll > 300){
        btnUp.style.transform = "scale(1)";
    }else if(scroll < 300){

        btnUp.style.transform ="scale(0)";
    }
}
const BOTON_ENVIAR=document.getElementById("botonEnviar");
BOTON_ENVIAR.addEventListener("click",() => {
   
        alert("Datos enviados correctamente");
        
    })
// const COMENT_LIM=document.getElementById("coment");

// ------------declaración de variables --------------

const PRECIO=200;
const TEXTO_PAGAR="Total a Pagar: $";
const BOTON_RESUMEN=document.getElementById("resumen");
const BOTON_BORRAR=document.getElementById("borrar");
const INP_NAME=document.getElementById("nombre");
const INP_SURNAME=document.getElementById("apellido");
const INP_DNI=document.getElementById("dni");
const INP_EMAIL=document.getElementById("correo");
const INP_NUM=document.getElementById("cantidad");
const INP_CAT=document.getElementById("categoria");
const BOTON_ESTUDIANTE=document.getElementById("categoria");
var RESULTADO=document.getElementById("pagar");
var calculo=0;
var cantidad=0;



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
    INP_DNI.value="";
    INP_EMAIL.value="";
    INP_NUM.value="";
    INP_CAT.value="";
    RESULTADO.value="";

})

BOTON_ESTUDIANTE.addEventListener("click",() => {
    if(document.getElementById("categoria").value=="value0"){
        alert("El valor cantidad no puede estar vacio");
        return;
    }
    })


