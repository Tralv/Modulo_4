
window.alert('escribe el numero que tendra el arreglo');

var n = prompt();

if (n > 0 && n < 1000) {
} else {
window.alert('Intente otra vez');
}
var ar = [2,3];
var i = 0;
var r = 0;
var d = 0;
do {
 window.alert('dame un numero de la cadena');
d = prompt();
ar[i]= d;
r+=(d*1) ;
i+=1;

} while(i<n);


console.log(ar);
console.log(r);
