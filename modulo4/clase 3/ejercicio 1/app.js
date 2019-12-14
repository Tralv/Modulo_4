var listado = document.querySelectorAll('li:nth-child(odd)');

console.log(listado);

for (var i = 0; i < listado.length; i++) {
listado[i].style.color = "red";
listado[i].innerText = "Impar rojo";
}


var listado = document.querySelectorAll('li:nth-child(even)');

console.log(listado);

for (var i = 0; i < listado.length; i++) {
listado[i].style.color = "blue";
listado[i].innerText = "Par azul";
}
