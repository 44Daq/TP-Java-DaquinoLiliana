<?php 

$servidor="localhost";
$usuario="root";
$clave="";
$baseDeDatos="oradores";

 $enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

 if(!$enlace){
    echo"no se pudo conectar";
}
?>