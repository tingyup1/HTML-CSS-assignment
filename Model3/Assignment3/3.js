'use strict';
var targetElement=document.getElementById('target');

const names = ['John', 'Paul', 'Jones'];

for (var i=0; i<names.length; i++){
    targetElement.innerHTML+='<li>'+names[i]+'</li>';
}
