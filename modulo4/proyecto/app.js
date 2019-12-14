


// 7* Interactuar con el documento(html), modificando uno y multiples elementos.
var  val= document.querySelectorAll("li");
// 6* Iteraciones.(for, while, do while)
for (var i = 0; i < val.length; i++) {
console.log(val[i]);

val[i].style.color ="rgb(2"+i+"0,"+i+"00,"+i+"0)";


};








// 9*  Crear, reemplazar y eliminar elementos.

var li = document.querySelector('li:nth-child(3)');

var ul = document.querySelector('ul');

var newElement = document.createElement('img');

newElement.src ="imagenes/4.jpg" ;

ul.replaceChild(newElement, li)

// 8* Modificar elementos atravesando el documento.
var list = document.querySelector('ul');
var ul = list.lastElementChild;
ul.remove();
    var str = 'recargue';

var newElement = document.createElement('h1');
// 2* Concatenar strings.
newElement.innerText = str.concat(' la web para preguntar.');
// 5* Funciones.
var square = function(number) {return number * number};
// 1* Utilizar método math.
var a= Math.floor(Math.random() * 4 + 1);
var a = square(a)
newElement.style.color ="rgb("+a+"00,"+a+"00,"+a+"0)";
document.querySelector('h1').appendChild(newElement);







// 3* Arreglos y objetos.
var arreglos =[
{"name": "rojo", "color":"rojo", "concuerda": true},
{"name": "naranja", "color":"naranja fuerte", "concuerda": true},
{"name": "azul", "color":"naranja devil", "concuerda": false},
{"name": "amarillo", "color":"amarillo", "concuerda": true},
{"name": "verde", "color":"amarillo", "concuerda": false}
]
var op= prompt("que color escrito busca");

for (var i=0; i<arreglos.length; i++){
if (arreglos[i].name ==op) {
  var dato= prompt("que dato buscas? (name, color, concuerda)");
alert(arreglos[i] [dato]);

}}
// 4* comparaciones
console.log('1' == 1);
