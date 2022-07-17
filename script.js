const passwordInputs = document.querySelectorAll('#password');
const toggleShow = document.querySelectorAll('#toggleShow');
const container = document.querySelector('.container'); 
const logIn = document.querySelector('.login-link');
const signUp = document.querySelector('.signup-link');

//Log In Variables
const logInForm = document.forms['login'];
const logInEmail = document.forms['login']['name'];
const logInPassword = document.forms['login']['password'];

//Sign Up Variables
const signUpForm = document.forms['signup'];
const signUpName = document.forms['signup']['name'];
const signUpEmail = document.forms['signup']['email'];
const signUpPassword = document.forms['signup']['password'];


//Function that toggles showing the password entered
toggleShow.forEach(eyeIcon =>{
    eyeIcon.addEventListener('click', ()=>{
        passwordInputs.forEach(pwInput =>{
            if(pwInput.type === 'password'){
                pwInput.type = 'text';

                toggleShow.forEach(icon =>{
                    icon.classList.replace('fa-eye-slash', 'fa-eye');
                })
            }else{
                pwInput.type = 'password';

                toggleShow.forEach(icon =>{
                    icon.classList.replace('fa-eye','fa-eye-slash');
                })
            }
        })
    })
});


//Appear Signup & Login Forms
signUp.onclick = function() {
    container.classList.add('active');
}

logIn.onclick = function() {
    container.classList.remove('active');
}

//Submit Sign Up
signUpForm.addEventListener('submit', event =>{
    event.preventDefault();

    validateSignUp();
});


//Function setError called when input is not valid to display error message
const setError = (element, message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');
    console.log(errorDisplay);
    
    errorDisplay.innerHTML = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
};

//Function setSuccess called when input is valid 
const setSuccess = (element) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};

//Function to check Email
const isEmailValid = (email) => {
    const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
};


const validateSignUp = () => {

    if(signUpName.value.trim() === ''){
        setError(signUpName, 'Name is required');
    } else {
        setSuccess(signUpName);
    }

    if(signUpEmail.value.trim() === ''){
        setError(signUpEmail, 'Email is required');
    } else if(!isEmailValid(signUpEmail.value.trim())){
        setError(signUpEmail, 'Provide a valid email');
    } else {
        setSuccess(signUpEmail);
    }

    if(signUpPassword.value.trim() === ''){
        setError(signUpPassword, 'Password is required');
    } else if(signUpPassword.value.trim().length < 8 ){
        setError(signUpPassword, 'Password requires at least 8 characters');
    } else {
        setSuccess(signUpPassword);
    }
};
