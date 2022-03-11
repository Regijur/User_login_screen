submit_button = document.getElementById("submit-disable")
eye = document.getElementById("button-eye")
eyedis = document.getElementById("button-eye-disable")
email_input = document.getElementById("email")
password_input = document.getElementById("password")


window.addEventListener("load", addEvents)

function addEvents(){
    eye.addEventListener("click",changeVisibility)
    eyedis.addEventListener("click",changeVisibility)
    eye.addEventListener("click",() => setPasswordType("password"))
    eyedis.addEventListener("click", () => setPasswordType("text"))
    email_input.addEventListener("change", VerificateSubmition)
    password_input.addEventListener("change", VerificateSubmition)
}

function changeVisibility(){
    eye = document.getElementById("button-eye")
    eyedis = document.getElementById("button-eye-disable")

    eye.id = "button-eye-disable"
    eyedis.id = "button-eye"
}

function setPasswordType(type){
    password_button = document.getElementById("password")
    password_button.type = type;
}


function VerificateSubmition(){
    email_len = document.getElementById("email").value.length
    password_len = document.getElementById("password").value.length
    
    if(password_len * email_len > 0){
        submit_button.id = "submit-enable"
        submit_button.disabled = false;
    }
    else{
        submit_button.id = "submit-disable"  
    }

}