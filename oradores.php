<?php 
// echo'Venta de Tickets';
$conectar=@mysql_connect('localhost', 'root', '');
if(!$conectar){
    echo"no se pudo conectar";
}else{
    $base=mysql_select_db('tickets');
    if(!$base){
        echo"no se encontro la base ";
    }
}
$id=$_POST['id'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$mensaje=$_POST['mensaje'];


$sql="INSERT INTO compra VALUES ('$id',
                                 '$nombre',
                                 '$apellido',
                                 '$mensaje')";
                            
$ejecutar=mysql_query($sql);
if(!$ejecutar){
    echo"Hubo un error";
}else{
    echo"Datos guardados correctamente<br><a href='http://localhost/phpmyadmin/sql.php?db=oradores&table=datos&pos=0'>Ir</a>";
}
?>