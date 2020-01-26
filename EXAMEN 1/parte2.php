<?php 
/*
crear,actualizar,eliminar,salir1
1) funcion para agregar elemntos al arreglo
2) funcion para editar elementos en el arreglo
3) funcion para realizar un pop a un elemnto especifico en el arreglo
4) 
*/
$a = array("juego_tronos","choque_reyes","tormenta_espadas","festin_cuervos","danza_dragones","fuego_sangre");
$b = 'tormenta_espadas';
$m = "choqueeeee";
$n = "los3cerditos";

function agregar($arre, $da){
	$f = $arre;
    $f[] = $da;
	return $f;
}

function modificar($arreglo,$datoBase,$datoNew){
	$longitud = count($arreglo);
	$arreglofinal = array(0,1);
	for ($i=0; $i <$longitud ; $i++) { 
		if ($arreglo[$i] == $datoBase) {
			$arreglofinal[$i] = $datoNew; 
		}else{
			$arreglofinal[$i] = $arreglo[$i];
		}
	}
	return $arreglofinal;
} 


function eliminar ($arreglo,$libro){
	$t= $arreglo;
	$indice = array_search($libro, $t);
	unset($t[$indice]);
	return $t;
}


$rr = agregar($a,"detergente");
$k = modificar($a,$b,$m);
$f =eliminar($a,$b);


print_r($rr);


?>
