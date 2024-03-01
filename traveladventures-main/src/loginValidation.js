function validateLogin() {
    var email = document.querySelector('input[type="email"]').value.trim();
    var password = document.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return false;
    }

    // If all validations pass, the form will submit
    return true;
}
