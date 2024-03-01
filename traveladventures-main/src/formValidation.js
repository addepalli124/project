function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var agreeTerms = document.getElementById("agreeTerms").checked;

    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || !agreeTerms) {
        alert("Please fill in all fields and agree to the terms & conditions.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return false;
    }


    // If all validations pass, the form will submit
    return true;
}