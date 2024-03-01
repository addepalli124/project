function validateLogin() {
    var email = document.querySelector('input[type="email"]').value.trim();

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    //if the validation is pass form will be submitted
    return true;
}
