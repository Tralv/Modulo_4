var botones = document.querySelectorAll('.btn-danger');

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', eliminarFila);
}

function eliminarFila(e) {
  //e.target.parentElement=e.target.parentElement+ " disable";
  document.querySelector("li").className=document.querySelector("li").className+ " disable";
}
