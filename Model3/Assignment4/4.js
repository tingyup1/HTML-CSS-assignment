'use strict';
var targetElement=document.getElementById('target');

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (var i=0; i<students.length; i++){
     var optionElement=document.createElement('option');
     optionElement.value=students[i].id;
     optionElement.textContent=students[i].name;
     targetElement.appendChild(optionElement)
}
