// Form Validation Function
function validateForm() {
    // Get the values of the input fields
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate that both the password and confirm password fields match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent the form from submitting
    }

    // Validate that all fields are filled in
    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields are required.");
        return false; // Prevent the form from submitting
    }

    // If the form is valid, allow submission
    return true;
}
