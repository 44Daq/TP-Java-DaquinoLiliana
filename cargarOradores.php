<?php 

$servidor="localhost";
$usuario="root";
$clave="";
$baseDeDatos="oradores";

 $enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

 if(!$enlace){
    echo"no se pudo conectar";
}

  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $tema = $_POST['tema'];
 

$cargarDatos = "INSERT INTO datos VALUES ('$nombre', '$apellido', '$tema')";
$ejecutar= mysqli_query($enlace, $cargarDatos);
  if($ejecutar){
  	echo "<script>alert ('Te has registrado!');
  	location.href='../Form/form.html'
  	</script>";
 
    	} else{
    	echo"<script>alert ('El registro no fue posible, verificá los datos');
  		location.href='../Form/form.html'
  		</script>";
 
    	}
?> 




    
