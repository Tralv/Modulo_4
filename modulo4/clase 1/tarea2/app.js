window.alert('numero de # que tendra la ultima fila');
var n = prompt();

if (n > 0 && n <= 100) {
} else {
  window.alert('Intente otra vez');
}
var ar = [2,3];
var i = 0;
var d= "\r"
 do {
ar[i]= " ";
  i+=1;
} while(i<n);

i = 0;
do {

  var nuevaLongitud = ar.push('#');
  var primero = ar.shift();
console.log(ar);
 i+=1;
} while(i<n);
// segun internet se tiene que usar \n pero no funciono ni \r y\b
// tambien decia que se puede usar <br> en el html con varias carpetas de js.
