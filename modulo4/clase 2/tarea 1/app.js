var x= Math.floor(Math.random() * 9 + 1);
var y= Math.floor(Math.random() * 9 + 1);
var m= Math.floor(Math.random() * 4 + 1);
console.log(m);
var r=0;
var a="w"



val = document.querySelector('#firstNumber');
val.innerText = x;
vals = document.querySelector('.secondNumber');
vals.innerText = y;

switch (m) {
  case 1:
a="+"
  r=(x*1)+(y*1);
  var numero = r.toFixed(2);
  val = document.querySelector('#operator');
  val.innerText = a;


  val = document.querySelector('#response');
  val.innerText = numero;

    break;
  case 2:

   a="-"
     r=(x*1)-(y*1)
     var numero = r.toFixed(2);
     val = document.querySelector('#operator');
     val.innerText = a;


     val = document.querySelector('#response');
     val.innerText = numero;

    break;
  case 3:
   a="*"
     r=(x*1)*(y*1);
     var numero = r.toFixed(2);
     val = document.querySelector('#operator');
     val.innerText = a;


     val = document.querySelector('#response');
     val.innerText = numero;

         break;
  case 4:
   a="/"
     r=(x*1)/(y*1);
     var numero = r.toFixed(2);
     val = document.querySelector('#operator');
     val.innerText = a;


     val = document.querySelector('#response');
     val.innerText = numero;

         break;
  default:

}
