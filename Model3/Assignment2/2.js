var resultElement=document.getElementById('target');

var firstItem=document.createElement('li');
firstItem.textContent='First item';

var secondItem=document.createElement('li')
secondItem.textContent='Second Item';
secondItem.classList.add('my-item');

var thirdItem=document.createElement('li');
thirdItem.textContent='Third item';

resultElement.appendChild(firstItem);
resultElement.appendChild(secondItem);
resultElement.appendChild(thirdItem);