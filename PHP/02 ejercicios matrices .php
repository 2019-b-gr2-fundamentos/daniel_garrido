<?php
$matrizejem = [	
	[1],
	[2,1],
	[1,2,3],
	["a"]
];



function verValidez ($a){
	$d = 0;//flase
	$c = 0;//true
	$b = [1];
	$ab = gettype($b);
	for ($i=0; $i < count($a); $i++) { 
		if ($ab == gettype($a[$i])) {
			for ($j=0; $j < count($a[$i]); $j++) { 
				if (is_integer($a[$i][$j])) {
				}else{
					$d++;
					break;
				}
			}
		}else{
			$d++;
			break;
		}
	}
	if ($d == 0) {
		return $b[0];
		}else{
		return $c;}
}
// 1 == true


function obtenPrimeDim ($b){
	$negativo = "no es matriz";
	$a = verValidez($b);
	if ($a == 1) {
		$ac = count($b);
		return $ac;
	}else{
		return $negativo;
	}
} 

echo (obtenPrimeDim($matrizejem));


function igualdad($a,$b){
	$long1 = count($a);
	$long1_1 = count($a[0]);
	$long2 = count($b);
	$long2_1 = count($b[0]);
	$c = $long1_1*$long1;
	$d = 0; 
	if ($long1 == $long2 && $long1_1 == $long2_1) {
		for ($i=0; $i < $long1; $i++) {
			for ($j=0; $j < $long1_1 ; $j++) { 
				if ($a[$i][$j]==$b[$i][$j]) {
					$d ++;
				}else{
					$x = $a[$i][$j];
					$y = $b[$i][$j]; 
					echo ("$x no es igual a $y")."\n";
					}
				}
			}
		if ($d == $c) {
			echo "son iguales";
		}	
	}else{echo "no son de la misma dimension";}
}

function suma($z){
	$long9 = count($z);
	$long9_1 = count($z[0]);
	for ($k=0; $k < $long9; $k++) { 
		$val2 = 0;
		for ($r=0; $r < $long9_1; $r++) { 
			$x = $z[$k][$r];
			$val2 = $val2 + $x; 
		}
		$ala = $k +1;
		echo "la suma de la fila $ala $val2"."\n";
	}


	for ($k=0; $k < $long9_1; $k++) { 
		$val2 = 0;
		for ($r=0; $r < $long9; $r++) { 
			$x = $z[$r][$k];
			$val2 = $val2 + $x; 
		}
		$ala = $k +1;
		echo "la suma de la columna $ala $val2"."\n";
	}
}


  ?>