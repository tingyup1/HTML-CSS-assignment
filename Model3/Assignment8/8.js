 function calculate(){
        var num1=parseFloat(document.getElementById('num1').value);
        var num2=parseFloat(document.getElementById('num2').value);
        var resultElement=document.getElementById('result');
        var operation=document.getElementById('operation').value;
        let result;
        switch (operation){
            case 'add':
                result=num1+num2;
                break
            case 'sub':
                result=num1-num2;
                break
            case 'multi':
                result=num1*num2;
                break
            case 'div':
                result=num1/num2;
                break
        }
      resultElement.textContent='Result:'+result

    }