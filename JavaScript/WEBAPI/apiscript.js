function myFunction(params) {
    const inp=document.getElementById("id");
    if(!inp.checkValidity()){
        document.getElementById("demo").innerHTML=inp.validationMessage;
    }else{
        document.getElementById("demo").innerHTML="Input Ok";
    }
}

function goBack(params) {
    window.history.back();
    
}