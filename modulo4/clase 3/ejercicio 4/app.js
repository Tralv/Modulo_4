
var li = document.querySelector('li:nth-child(3)');
var ul = document.querySelector('ul');

var newElement = document.createElement('img');
newElement.src = 'https://picsum.photos/100/100';

ul.replaceChild(newElement, li)


var list = document.querySelector('ul');
test = list.children;
test[3].remove();


var link = document.createElement('a');
 link.className = 'link';
 link.innerText = 'Go to goole';
link.href = 'hhttps://www.google.com.mx/search?client=opera&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8';
// document.querySelector('li:nth-child(1)').prepend(link);


 var lin = document.createElement('a');
  lin.className = 'link';
  lin.innerText = 'Go to goole';
 lin.href = 'hhttps://www.google.com.mx/search?client=opera&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8';
  //document.querySelector('li:nth-child(1)').prepend(lin);


   var item = document.createElement('li');
   item.className = 'item text-center';
   item.id = 'new-item';
   item.innerText = 'Go to goole )=';

   item.href = 'https://www.google.com.mx/search?client=opera&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8';
document.querySelector('li:nth-child(1)').prepend(item);
   document.querySelector('li').appendChild(link);


   var items = document.createElement('li');
   items.className = 'item text-center';
   items.id = 'new-item';
   items.innerText = 'Elemento Nuevo';

   document.querySelector('li:nth-child(1)').prepend(items);
