<?php 

/*
function eliminar ($arreglo,$libro){
	$nuevo = array();
	for ($i=0; $i < count($arreglo); $i++) { 
		if ($arreglo[$i]==$libro) {
		}else{
			$nuevo[$i]=$arreglo[$i];
		}
	}
	print_r($nuevo);
}

eliminar($a,$b);
*/

$a = array("juego_tronos","choque_reyes","tormenta_espadas","festin_cuervos","danza_dragones","fuego_sangre");
$b = 'tormenta_espadas';
$c = "lostres";

function agregar($arre, $da){
	$f = $arre;
    $f[] = $da;
	return $f;
}

$t = agregar($a,$c);
print_r($t);







/*
function camb1($arreglo,$num){
	$t = array();	
		for ($j=0; $j < count($arreglo) ; $j++) { 
			if ($arreglo[$j] == $num) {
				$temp = $arreglo[$j];
				$t[$j + 1] = $temp;
				$t[$j] = $arreglo[$j];			
			}elseif($t[$j - 1] == $num){
				$temp = $arreglo[$j];
				$t[$j + 1] = $temp;
				$t[$j] = $arreglo[$j];
			}else{
				$t[$j] = $arreglo[$j];
			}
		}
return $t;
}


$p = camb1($a,$b);
print_r($p);
*/
/*    j>5
j =0
t=(juegotronos)
j=1
t = [juegotro,choque]
j=2
t=[juegotro,choque,festin,tormen]
j=3


*/



 ?>
