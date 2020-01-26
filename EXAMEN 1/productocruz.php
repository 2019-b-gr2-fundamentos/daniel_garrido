<?php 
/*
function longitud ($a){
	$y = count($a);
	echo $y;
}

$z = array(1,2,5);
longitud ($z);

echo "\n";
function sacarx($b){
	$fe = $b[0];
	echo $fe;
}
sacarx($z);
echo "\n";


function sumalong ($c,$d){
	$uno = count($c);
	$dos = count($d);
	echo $uno + $dos;
}
$t = array(1,2,4);
sumalong($z,$t);


function productoCruz($numero1,$numero2,$numero3){
	function lala($numero1,$numero2){
		$elemx = ($numero1[1]*$numero2[2])-($numero1[2]*$numero2[1]);
		$elemy = -(($numero1[0]*$numero2[2])-($numero1[2]*$numero2[0]));
		$elemz = ($numero1[0]*$numero2[1])-($numero1[1]*$numero2[0]);
		return $vectorf = array($elemx,$elemy,$elemz);
	}
	$a = lala($numero1,$numero2);
	$b = lala($a,$numero3);
	print_r($b);
	
}

$a = array(1,2,3);
$b = array(1,3,2);
$c = array(1,3,2);
productoCruz(3,$a,$b,$c);





function sumavectorialdoble ($a,$b){
	$longitud = count($a);
	$p = array();
	for ($l=0; $l < $longitud; $l++) { 
	$p[$l] = $a[$l] + $b[$l];
	}
	return $p;
}

$xz = sumavectorialdoble($a,$b);
print_r($xz);
*/

$q = array(1,5,2,6,7);
$t = $q[2];
$l = $q[3];
$q[3] = $t; 
$q[3-1] =$l;
print_r($q);
