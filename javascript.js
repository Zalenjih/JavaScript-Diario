//Tipos de variables
//El lenguaje no es fuertemente tipado, por lo tanto solo es necesario usar la
//palabra reservada var para identificar a continuación una nueva variable
var numero = 86;
var cadenaTexto = "Soy una cadena de texto";
var bandera = true;
var opcion = 'c';

//Condicionales
//Al igual que java se usan las condicionales tradicionales
if (numero < 100) {
  console.log("el número es menor a 100");
}
else{
  console.log("El número es mayor a 100");
}

switch (opcion) {
  case 'a':

    break;

  case 'b':

    break;
  default:

}

//Ciclos y arreglos
//Mismos conceptos y palabras reservadas utilizadas en javascript

var arreglo = [1,2,3,4,5,6,7,8,9,10];
var arreglo2 = ["Humberto", 1, "Zapata", true];

for (var i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}


//Funciones
//El concepto de las funciones son aplicadas de la misma forma que los métodos
//de java (al menos cuando se habla del paradigma conocido)

function suma(numero1, numero2){
  return numero1 + numero2;
}

console.log(suma(1,1000));
