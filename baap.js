document.getElementById('btn-submit').addEventListener('click', function(){

    const emailinput = document.getElementById('use-email');
    const emailuser = emailinput.value
  


    const passwordinput = document.getElementById('user-password')
    const passworduser = passwordinput.value;

    if( emailuser === "baaperbank@email.com" && passworduser === "baaperbank"){
       window.location.href = 'index1.html'
    }
    else{
        alert('not mach your infrom')
    }

})