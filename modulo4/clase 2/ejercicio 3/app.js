
var  val= document.querySelectorAll("li");

for (var i = 0; i < val.length; i++) {
console.log(val[i]);

val[i].style.color ="rgb(2"+i+"0,"+i+"00,"+i+"0)";
val[i].style.marginTop = ".25in";
val[i].style.lineHeight= '1.3em';
val[i].style.fontWeight= 'bold';
val[i].style.left= "24px"

};
console.log(val);
