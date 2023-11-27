// get data 
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#Success");
const errorNodes = document.querySelectorAll(".error");

function validateform(){

    clearMessages();
    let erroFlag= false;

    if(nameInput.value.length < 1){
        errorNodes[0].InnerText ="Name cannot be blank";
        nameInput.classList.add("error-border");
        errorflag = true;
    }

    if (!emailIsValid(email.value)){ {
        errorNodes[0].InnerText ="Invalid email address";
        email.classList.add("error-border");
        errorflag = true;
    }

    if(message.value.length < 1){
        errorNodes[0].InnerText = "please enter a message";
        message.classList.add("error-border");
        errorflag = true;
    }

    if(errorflag){
        success.innertext = "Success!";
    }
}

function clearMessages(){
    for(let i=0; i < errorNodes.length; i++){
        errorNodes[i].InnerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}
// Check if email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

}