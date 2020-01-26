<?php 


function calculadora ($operacion, $numero1, $numero2, $numero3) {
		$resultado = 0;
		if($operacion == 1 || $operacion == "suma" || $operacion == "suma-1"){
			$resultado = $numero1 + $numero2 + $numero3;
			echo $resultado;
		}elseif($operacion == 2 || $operacion == "resta" || $operacion == "resta-1"){
			$resultado = $numero1 - $numero2 - $numero3;
			echo $resultado;
		}elseif($operacion == 3 || $operacion == "multiplicacion" || $operacion == "multiplicacion-3"){
			$resultado = $numero1 * $numero2 * $numero3;
			echo $resultado;
		}elseif($operacion == 4 || $operacion == "division" || $operacion == "division-4"){
			$resultado = ($numero1/$numero2) / $numero3;
			echo $resultado; 
		}elseif($operacion == 5 || $operacion == "producto cruz" || $operacion == "producto cruz-5" ){
			function lala($numero1,$numero2){
					$elemx = ($numero1[1]*$numero2[2])-($numero1[2]*$numero2[1]);
					$elemy = -(($numero1[0]*$numero2[2])-($numero1[2]*$numero2[0]));
					$elemz = ($numero1[0]*$numero2[1])-($numero1[1]*$numero2[0]);
					return $vectorf = array($elemx,$elemy,$elemz);
					}
			if (count($numero1) == count($numero2) && count($numero1) == count($numero3) && count($numero1) == 3) {
							$a = lala($numero1,$numero2);
							$b = lala($a,$numero3);
							print_r($b);
				}else{echo ">;v";}				
		}elseif($operacion == 6 || $operacion == "producto punto" || $operacion == "producto punto-6"){
			if ($numero3 == 0){
				$valor = 0;
				for ($i=0; $i < 3 ; $i++){ 
					$suma = $numero1[$i] * $numero2[$i];
					$valor = $valor + $suma;  
				}
				echo $valor;	
			}else {
				echo "el producto punto es escalar, habla bien ";
			}
		}elseif($operacion == 7 || $operacion == "ecuaciones cuadraticas" || $operacion == "ecuaciones cuadraticas-7"){
			// numero1 =  a, numero2 = b , numero3 = c
			$condicional = ($numero2*$numero2) - (4 * $numero1 * $numero3);
			if ($condicional >= 0 && $numero1 != 0){
				$cuadraticapositiva = ((-$numero2)+sqrt($condicional)) / (2 * $numero1);
				$cuadraticanegativa = ((-$numero2)-sqrt($condicional)) / (2 * $numero1);
				echo "X1 = $cuadraticapositiva"."\n";
				echo "X2 = $cuadraticanegativa";
			}else {echo "esta raiz es imaginaria como su amor por ti :'v";}
		}elseif($operacion == 8 || $operacion == "factorial" || $operacion == "factorial-8"){
			$expresiones = array($numero1,$numero2,$numero3);			 
				function fact($number){
					$vect = 1;
					for ($i=1; $i < $number + 1; $i++) { 
						$vect = $vect * $i;
					}
				echo "$vect";
				echo "\n";
				}
				for ($i=0; $i < 3 ; $i++) { 
					fact($expresiones[$i]);
				}
		}elseif($operacion == 9 || $operacion == "Valor absoluto" || $operacion == "Valor absoluto-9"){
			$vectorlala = array($numero1,$numero2,$numero3);
			for ($i=0; $i < 3; $i++) { 
				if ($vectorlala[$i] < 0) {
					$resultado = -$vectorlala[$i];
					echo "el valor absoluto de $vectorlala[$i] es $resultado";
					echo "\n";
				}else {echo  "el valor absoluto de $vectorlala[$i] es $vectorlala[$i]";
						echo "\n";}
			}
		}elseif($operacion == 10 || $operacion == "suma vectorial" || $operacion == "suma vectorial-10"){
			$long1 = count($numero1);
			$long2 = count($numero2);
			$long3 = count($numero3);
			function sumavectorialdoble ($a,$b){
				$longitud = count($a);
				$p = array();
				for ($l=0; $l < $longitud; $l++) { 
					$p[$l] = $a[$l] + $b[$l];
				}
				return $p;
			}
			if ($long1==$long2 && $long2==$long3){
				$resultado = array();
				for ($i=0; $i < $long3; $i++){ 
					$resultado[$i] = $numero1[$i] + $numero2[$i] + $numero3[$i]; 
				}
				print_r($resultado);
			}else {echo"esto no se puede sumar :v";}			
		}
}
	
calculadora (1,2,8,4);

 
 ?>