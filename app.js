var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');




var user_email = "atifhasan@gmail.com";
var user_password = "Pakistan123@";
var input_field = document.querySelector("input").value;

function emailValidation() {
    if(user_email == input_field && user_email != "" ) {
        email.style.border = "1px solid #1a73e8";
       
        
         email_error.style.display = "none";
       
        return true;
    }

    else {
        if(user_email !== "") {
            email.style.border = "1px solid red";
            email_error.style.display = "block";  
            
           
        }

        else {
            document.getElementById("email_error").innerHTML = " Enter an email or phone number";
        }
        return false;
    }
       
    
   
}


function passwordValidation() {
    let password_error = document.getElementById('password_error');
    if(user_password == input_field && user_password != "" ) {
        password.style.border = "1px solid #1a73e8";
       
        
         password_error.style.display = "none";
       
        return true;
    }

    else {
        if(user_password !== "") {
            password.style.border = "1px solid red";
            password_error.style.display = "block";   
           
        }

        else {
            document.getElementById("password_error").innerHTML = " Enter your password";
        }
    }
       
    
   
}
