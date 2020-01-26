<?php  
$Escalares = array('boolean','integer','float','string');
$compuestos = array('object','array');
$especiales = array('resource','null');
$boolean='Este es el tipo de dato más simple que existe en PHP; un boolean expresa un valor de verdad, el cual solo puede tener uno de dos estados; TRUE o FALSE; en ambos casos, son insensibles a mayúsculas y minúsculas.';
$integer='Los integer pueden ser especificados mediante notación decimal (base 10), hexadecimal (base 16), octal (base 8) o binaria (base 2), opcionalmente precedidos por un signo (- o +) según sea el caso';
$float='Un float o números de punto flotante es un número con signo con parte decimal; la misma regla se aplica para PHP.';
$string='Un string, o cadena, es una serie de caracteres donde cada carácter es lo mismo que un byte. Esto significa que PHP solo admite un conjunto de 256 caracteres, y de ahí que no ofrezca soporte nativo para Unicode. Véanse los detalles del tipo string.';
$object='Si un object se convierte en un object, éste no se modifica. Si un valor de cualquier otro tipo se convierte en un object, se crea una nueva instancia de la clase stdClass incorporada.';
$array='Un array en PHP es en realidad un mapa ordenado. Un mapa es un tipo de datos que asocia valores con claves. Este tipo se optimiza para varios usos diferentes; se puede emplear como un array, lista (vector), tabla asociativa (tabla hash - una implementación de un mapa), diccionario, colección, pila, cola, y posiblemente más. Ya que los valores de un array pueden ser otros arrays, también son posibles árboles y arrays multidimensionales.';
$resource='Un valor tipo resource es una variable especial, que contiene una referencia a un recurso externo. Los recursos son creados y usados por funciones especiales. Vea el apéndice para un listado de todas estas funciones y los tipos resource correspondientes.';
$null='El valor especial NULL representa una variable sin valor. NULL es el único valor posible del tipo null.';


print'Hola mundo xd'.'<br>';
print'Existen 8 tipos de variables primitivas en php'.'<br>';
echo'Escalares:'.$Escalares[0].','.$Escalares[1].','.$Escalares[2].','.$Escalares[3].'<br>';
echo'compuestos:'.$compuestos[0].','.$compuestos[1].'<br>';
echo'especiales:'.$especiales[0].','.$especiales[1].'<br>';
print 'boolean:'.$boolean.'<br>';
print 'integer:'.$integer.'<br>';
print 'float:'.$float.'<br>';
print 'string:'.$string.'<br>';
print 'object:'.$object.'<br>';
print 'array:'.$array.'<br>';
print 'resource:'.$resource.'<br>';
print 'null:'.$null.'<br>';





?>