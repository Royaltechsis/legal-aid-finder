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

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const phone = document.getElementById('phonenumber').value;
        const role = document.getElementById('role').value;

        // Validate form data
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Validate that all fields are filled in
        if (username === "" || email === "" || password === "" || confirmPassword === "" || phone === "" || role === "") {
            alert("All fields are required.");
            return;
        }

        // Prepare user data
        const userData = {
            userName: username,
            email: email,
            password: password,
            phone: phone,
            role: role
        };

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();
            console.log('User registration result:', result);

            if (response.ok) {
                alert('User registered successfully');
                // Redirect to login page or another page
                window.location.href = 'login.html';
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering the user');
        }
    });
});