function init(){
    var my_form = document.getElementById("demo_form");
    my_form.addEventListener("submit", validate_form);
}

function validate_form(e){
    var form_valid =true;
    var my_form = document.getElementById("demo_form")
    
    if(my_form.name.value == ""){
        //form is not valid
        document.getElementById("name_error").style.display ="block";
        form_valid = false;
        e.preventDefault();
    }
    else{
        //form is valid
        document.getElementById("name_error").style.display ="none";
        }

    if(my_form.email.value == ""){
        //form is not valid
        document.getElementById("email_error").style.display ="block";
        form_valid = false;
        e.preventDefault();
    }
    else{
        //form is valid
        document.getElementById("email_error").style.display ="none";
        }
}       
