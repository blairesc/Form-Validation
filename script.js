const passwordInputs = document.querySelectorAll('#password');
const toggleShow = document.querySelectorAll('#toggleShow');
const container = document.querySelector('.container'); 
const logIn = document.querySelector('.login-link');
const signUp = document.querySelector('.signup-link');


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
})



//Appear Signup & Login
signUp.onclick = function() {
    container.classList.add('active');
}

logIn.onclick = function() {
    container.classList.remove('active');
}

