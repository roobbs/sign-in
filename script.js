let passwordInput = document.getElementById("password");
let passwordConfirmed = document.getElementById("confirm-password");

document.addEventListener("DOMContentLoaded", function() {
    passwordConfirmed.addEventListener("input", function() {
        let password = passwordInput.value;
        let password2 = passwordConfirmed.value;

        if(password===password2) {
            passwordConfirmed.setCustomValidity("");
        } else {
            passwordConfirmed.setCustomValidity("Las contraseñas no coinciden")
        }
    })
});