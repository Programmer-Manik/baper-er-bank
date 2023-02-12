document.getElementById('btn-deposit').addEventListener('click',function(){

    const inputvaluekey = document.getElementById('input-value');
    const inputvaluestring = inputvaluekey.value ;
    const hellow = parseFloat(inputvaluestring)
     
    inputvaluekey.value = '';
    if(isNaN(hellow)){
        alert('not suppot leater supprot number')
        return
    }

    const deposittext = document.getElementById('deposit-text');
    const depositstring = deposittext.innerText;
    const newdeposit = parseFloat(depositstring)
     
    const totalydeposit = newdeposit + hellow ;

    deposittext.innerText = totalydeposit;


    const blanchtext = document.getElementById('blanch-text');
    const blanchtextstring = blanchtext.innerText;
    const newblanchtext = parseFloat(blanchtextstring);

    const depositPlusBlanch = totalydeposit + newblanchtext;

    blanchtext.innerText = depositPlusBlanch;





   

})