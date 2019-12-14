
var arreglos =[
{"name": "Omar", "age":29, "test": false},
{"name": "Joul", "age":58, "test": false},
{"name": "Oscar", "age":21, "test": false},
{"name": "Otto", "age":39, "test": false},
{"name": "Omero", "age":54, "test": false}
]
var op= prompt("que persona busca");

for (var i=0; i<arreglos.length; i++){
if (arreglos[i].name ==op) {
  var dato= prompt("que dato buscas? (name, age, test)");
alert(arreglos[i] [dato]);
break;
} else if(i==arreglos.length-1){
  alert("no existe este cliente")
}
}
