// Multiples eventos
 var botones = document.querySelectorAll('li');

 for (var i = 0; i < botones.length; i++) {
   botones[i].addEventListener('mouseover', getRandomColor);
 }

 function getRandomColor(e) {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
    elemento=e.target;//parentElement;
   elemento.style["background-color"]=color;
 }
