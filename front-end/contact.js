// get data

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data

function validateForm(){

    clearMessage();
    let errorFlag = false;


    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }  


if(!emailIsValid(email.value)){
   errorNodes[1].innerText = "invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
    
}  

if(message.value.length < 1){
    errorNodes[2].innerText = "Please enter message";
     email.classList.add("error-border");
     errorFlag = true;

}
if (!errorFlag){
    success.innerText = "Success!";
}
}
// clear error / success message

function clearMessage(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes [i].innerText = "";
         success.innerText = "";
    }
   
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// check email if valid

function emailIsValid(email){
    let pattern =/\S+@\S+\.\S+/;
    return pattern.test(email);
}
