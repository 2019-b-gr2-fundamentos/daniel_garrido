<?php 
$Nombre = "Daniel Garrido";
$numerouno = 1;
$numerodos =2;
$g = 8;
$a = $b = 2;

// Para las operaciones utilizaremos los parentesis.
//Notemos que si utilizamos el "\n" nosotros nos aseguramos de que se salte a la siguiente linea

echo "a + daniel". "\n";
echo ($g + $a). "\n";   //Esto suelta el 8 + 2 =10
echo ($a + $b). "\n";
echo ($a + $b). "\n";

print(-$a). "\n";  // Me imprime el valor en negarivo
echo ($g ** $a). "\n";    // Para ecponente usar el doble asterisco

// -----> Para utilizar las secuencias de escape, en php
// \n ----> Enter
// \t ----> tabulador,   \v ----> tabulador vertical
// Uso de las comillas y string -----> con el punto-->.
$oracion1 = 'esto se escribira tal cual $a ademas $g';
$oracion3 = "esto se escribira tal cual $a ademas $g";
$oracion2 = "ahora no se que decir";

echo ($oracion1.$oracion2)."\n";
echo ($oracion1)."\n";
echo ($oracion3)."\n";



//Para colocar el contador usateremos strlen
echo ($Nombre)."\n";
echo strlen($Nombre)."\n";//----->Cuenta el numero de letras incluyendo el espacio
echo strtoupper($Nombre)."\n";//--->Sube todo a mayusculas
echo strrev($Nombre)."\n";//---->literalmente invierte el string ---> str de string y rev de reverse

echo strtolower($Nombre)."\n";  //---> Cambiar todo a minusculas
echo str_replace("a", "f", $Nombre)."\n";   // ---> Buscar a, cambiar por f en la variable nombre

echo strpbrk($Nombre, "G")."\n";     //Notemos que pone busca la primera letra igual y borra todo lo demas

echo strrchr($Nombre, "l")."\n";

echo strstr($Nombre, "a")."\n";   //Estos 2 ultimos hacen lo mismo, buscan la letra e imprimen solo lo despues a eso


$final = array(2,5,4);
$inicial = array(1,3,5);
$multi = $final[0] * $inicial[2];
echo $multi;
echo "\n"; 
//Para declarar el array tenemos que utilizar la palabra a lado del parentesis


$valor = 0;
for ($i=0; $i < 3; $i++) { 
	$ejec = $i + 2;
	$valor = $valor + $ejec;
}
echo $valor;
 ?>




