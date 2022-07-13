let passwordInput = document.getElementById('password');
let eyeIcon = document.getElementById('eyeIcon');
const container = document.querySelector('.container'); 
const logIn = document.querySelector('.login-link');
const signUp = document.querySelector('.signup-link');


//Function that toggles showing the password entered
eyeIcon.onclick = function() {
    const inputType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.type = inputType;
    
    if (this.classList.contains('fa-eye-slash')) {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    } else {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    }
};


//Appear Signup & Login
signUp.onclick = function() {
    container.classList.add('active');
}

logIn.onclick = function() {
    container.classList.remove('active');
}

