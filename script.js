let passwordInput = document.getElementById('password');
let eyeIcon = document.getElementById('eyeIcon');


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


