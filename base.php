 <?php 
echo'Venta de Tickets';
$conectar=@mysql_connect('localhost', 'root', '');
if(!$conectar){
    echo"no se pudo conectar";
}else{
    $base=mysql_select_db('compra');
    if(!$base){
        echo"no se encontro la base";
    }
}
$dni=$_POST['dni'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$correo=$_POST['correo'];
// $cantidad=$_POST['cantidad'];
// $total=$_POST['total'];

$sql="INSERT INTO venta VALUES ('$dni',
                                 '$nombre',
                                 '$apellido',
                                 '$correo')";
                               

$ejecutar=mysql_query($sql);

if(!$ejecutar){
    echo"Hubo un error";
}else{
    echo"Datos guardados correctamente<br><a href='base.html'>Ir</a>";
}
?>

