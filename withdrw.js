
document.getElementById('btn-withdraw').addEventListener('click', function(){

    const inputwithdraw = document.getElementById('input-withdraw');
    const inputwithdrawstring = inputwithdraw.value ;
    const newwithdraw = parseFloat(inputwithdrawstring);
    
    inputwithdraw.value = '' ;
    if(isNaN(newwithdraw)){
        alert('not suppot leater supprot number')
        return
    }

    const blanchwhindraw = document.getElementById('blanch-whindraw');
    const blanchwhindrawstring = blanchwhindraw.innerText ;
    const blanchNumber = parseFloat(blanchwhindrawstring);

    const totalbleanchwithdraw = newwithdraw + blanchNumber;
    blanchwhindraw.innerText = totalbleanchwithdraw ;


    const totalbleanctextinner = document.getElementById('blanch-text');
    const totalbleanctextinnerstring = totalbleanctextinner.innerText ;
    const totalAmounet = parseFloat(totalbleanctextinnerstring);


    const allAmounte =  totalAmounet - totalbleanchwithdraw ;
    totalbleanctextinner.innerText = allAmounte;

})