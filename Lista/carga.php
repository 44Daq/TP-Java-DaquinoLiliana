
<?php
try{
  require 'conexion.php';

  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $tema = $_POST['tema'];
 
   $consulta = "SELECT * FROM  datos";
    $ejecutar = mysqli_query($enlace, $consulta);
    $verFilas = mysqli_num_rows($ejecutar);
    $fila = mysqli_fetch_array($ejecutar);

       if(!$ejecutar){
        echo"error en la consulta";
       	}else{
            if($verFilas<1){
            echo"<tr><td>Sin registros</td></tr>";
            }else{
            	for($i=0; $i<=$fila; $i++);{
            		echo ' 
            			<tr>
                      		<td>'. $fila[0].'</td>
                    		<td>'. $fila[1].'</td>
                    		<td>'. $fila[2].'</td>
                    	</tr>

            		'; $fila = mysqli_fetch_array($ejecutar);


            	}else{
            		    echo'<script> alert ("Datos guardados correctamente");}
       					 location.href = " ../orador.html";
			       					 </script>';
					}                       

            	} 

            }
        }
}
?>
    