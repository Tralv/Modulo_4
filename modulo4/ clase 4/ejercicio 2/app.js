
// Eventos

var boton = document.querySelector('.btn');

// Listado de eventos: https://www.w3schools.com/jsref/dom_obj_event.asp


boton.addEventListener('click', changeTitle);

function changeTitle() {
  var titleInput = document.querySelector('#title').value;
  console.log(titleInput);

var a=document.querySelector("li:nth-child("+titleInput+")");
a.remove();
}
//document.querySelector("li:nth-child("titleInput")").remove();
